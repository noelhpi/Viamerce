import React, { useState } from "react";
import { Card } from "./ui/card";
import { MessageCircleDashed as MessageCircle, Mail, Phone, Copy, Zap, Check, Send } from 'lucide-react';
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { toast } from 'sonner';

export function Contact() {
  const whatsappUrl =
    "https://wa.me/5534984441801?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20setup%20e%20treinamento%20de%20e-commerce.";
  const emailUrl = "mailto:noelhpi@gmail.com?subject=Contato com Noel Ribeiro&body=Olá! Gostaria de saber mais sobre o setup e estruturação de e-commerce.";

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const path = 'leads';
    try {
      await addDoc(collection(db, path), {
        ...formData,
        submissionDate: serverTimestamp(),
      });
      toast.success('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      try {
        handleFirestoreError(error, OperationType.CREATE, path);
      } catch (err) {
        // Log already handled by helper
      }
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0F2744] to-[#0A1628] overflow-hidden"
    >
      <div className="max-w-xl mx-auto">
        <ScrollAnimationWrapper>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 px-6 py-2 rounded-full border border-cyan-500/30 mb-6">
              <Zap className="w-4 h-4 text-cyan-500" />
              <span className="text-cyan-500 font-semibold text-sm">
                Pronto para começar?
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Pronto para Impulsionar seu E-commerce?
            </h2>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay="duration-700">
          <Card color="cyan" className="p-8 sm:p-12 relative group">
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Fale com o Especialista
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 mb-10">
                <div>
                  <input
                    type="text"
                    placeholder="Seu Nome"
                    required
                    className="w-full bg-[#0A1628]/60 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Seu E-mail"
                    required
                    className="w-full bg-[#0A1628]/60 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Seu Telefone (opcional)"
                    className="w-full bg-[#0A1628]/60 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Como podemos ajudar?"
                    required
                    rows={4}
                    className="w-full bg-[#0A1628]/60 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500/50 text-[#0A1628] py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-[#0A1628]/30 border-t-[#0A1628] rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>

              <div className="relative flex items-center mb-10">
                <div className="flex-grow border-t border-white/5"></div>
                <span className="flex-shrink mx-4 text-sm text-gray-500 uppercase tracking-widest font-bold">Ou prefira</span>
                <div className="flex-grow border-t border-white/5"></div>
              </div>

              <div className="space-y-5">
                {/* Email Button */}
                <a
                  href={emailUrl}
                  className="group flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#10B981] to-[#00D9FF] text-[#0A1628] py-5 rounded-[1.25rem] font-bold text-xl hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-300 hover:scale-[1.05] active:scale-95 btn-shine cursor-pointer"
                >
                  <Mail className="w-6 h-6" />
                  Enviar um E-mail
                </a>

                {/* WhatsApp Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full border-2 border-white/10 text-white/90 py-5 rounded-[1.25rem] font-bold text-xl hover:bg-white/5 transition-all duration-300 hover:scale-[1.05] active:scale-95 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] btn-shine cursor-pointer"
                >
                  <MessageCircle className="w-6 h-6 text-cyan-500" />
                  <span className="group-hover:text-cyan-500 transition-colors">Falar no WhatsApp</span>
                </a>

                <div className="pt-10 mt-2 space-y-4 border-t border-white/5">
                  {/* Email Info Row */}
                  <div className="flex items-center justify-between p-5 rounded-2xl bg-[#0A1628]/40 border border-white/5 group hover:bg-[#0A1628]/60 transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-500">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="text-gray-300 font-medium font-mono">noelhpi@gmail.com</span>
                    </div>
                    <button 
                      onClick={() => copyToClipboard('noelhpi@gmail.com', 'email')}
                      className="p-2.5 hover:bg-white/5 rounded-xl transition-all duration-300 group/btn"
                      title="Copiar e-mail"
                    >
                      {copiedEmail ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5 text-cyan-500/50 group-hover/btn:text-cyan-500" />
                      )}
                    </button>
                  </div>

                  {/* Phone Info Row */}
                  <div className="flex items-center justify-between p-5 rounded-2xl bg-[#0A1628]/40 border border-white/5 group hover:bg-[#0A1628]/60 transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-500">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="text-gray-300 font-medium">(34) 98444-1801</span>
                    </div>
                    <button 
                      onClick={() => copyToClipboard('(34) 98444-1801', 'phone')}
                      className="p-2.5 hover:bg-white/5 rounded-xl transition-all duration-300 group/btn"
                      title="Copiar telefone"
                    >
                      {copiedPhone ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5 text-cyan-500/50 group-hover/btn:text-cyan-500" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
