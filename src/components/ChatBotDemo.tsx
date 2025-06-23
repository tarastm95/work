import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  from: 'user' | 'bot';
}

const ChatBotDemo: React.FC = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, text: t('chatDemoWelcome'), from: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg = { id: messages.length + 1, text: trimmed, from: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const botMsg = { id: Date.now(), text: t('chatDemoReply'), from: 'bot' };
      setMessages(prev => [...prev, botMsg]);
    }, 500);
  };

  return (
    <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
      <h3 className="text-xl font-bold text-white mb-4 text-center">
        {t('chatDemoTitle')}
      </h3>
      <div className="h-56 overflow-y-auto bg-gray-800 rounded-lg p-4 mb-4 space-y-2">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`px-3 py-2 rounded-lg ${msg.from === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-grow bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none"
          placeholder={t('chatDemoPlaceholder')}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend();
          }}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 flex items-center gap-1"
        >
          <Send size={16} />
          {t('chatDemoSend')}
        </button>
      </div>
    </div>
  );
};

export default ChatBotDemo;
