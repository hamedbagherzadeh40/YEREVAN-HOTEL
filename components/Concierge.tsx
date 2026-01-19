
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2 } from 'lucide-react';
import { getConciergeResponse } from '../services/geminiService';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const Concierge: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    const newMessages: ChatMessage[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    const history = newMessages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const aiResponse = await getConciergeResponse(userMsg, history.slice(0, -1));
    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <section id="concierge" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#4B0082]">AI Boutique Concierge</h2>
          <p className="text-gray-600">Ask about our rooms, Yerevan's best cafes, or get our Anti-Fraud Guide.</p>
        </div>

        <div className="bg-[#fcfafc] border border-gray-100 rounded-3xl overflow-hidden shadow-xl flex flex-col h-[500px]">
          <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-10 text-gray-400">
                <Bot className="w-12 h-12 mx-auto mb-2 opacity-20" />
                <p>Hello! I am your Naghli concierge. How can I assist you today?</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl flex items-start space-x-3 ${
                  msg.role === 'user' 
                  ? 'bg-[#8b008b] text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                }`}>
                  <div className="flex-1 whitespace-pre-wrap">{msg.text}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
                  <Loader2 className="w-5 h-5 animate-spin text-[#8b008b]" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100 flex items-center space-x-2">
            <input 
              type="text" 
              placeholder="Ask anything about Yerevan..." 
              className="flex-1 py-3 px-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#da70d6]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="p-3 rounded-full bg-[#8b008b] text-white hover:bg-[#4B0082] transition-colors disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concierge;
