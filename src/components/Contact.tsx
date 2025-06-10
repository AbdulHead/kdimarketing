import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, X, Send } from 'lucide-react';

const Contact = () => {
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hi! How can we help you scale your brand today?' }
  ]);

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    
    setChatMessages(prev => [...prev, { type: 'user', message: chatMessage }]);
    
    // Simulate bot response
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        type: 'bot', 
        message: 'Thanks for your message! Our team will get back to you within 24 hours. For immediate assistance, please call us at +61 468 556 171 or email kdimarketings@gmail.com' 
      }]);
    }, 1000);
    
    setChatMessage('');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.2),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.2),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Ready to Scale Your Brand?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the brands that trust KDI Marketing to deliver exceptional results
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Get In Touch</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="mailto:kdimarketings@gmail.com"
                className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-slate-700/50 hover:bg-blue-600/20 border border-slate-600 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Email Us</div>
                  <div className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                    kdimarketings@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+61468556171"
                className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-slate-700/50 hover:bg-purple-600/20 border border-slate-600 hover:border-purple-500 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Call Us</div>
                  <div className="text-white font-medium group-hover:text-purple-400 transition-colors duration-300">
                    +61 468 556 171
                  </div>
                </div>
              </a>

              <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-slate-700/50 border border-slate-600">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Location</div>
                  <div className="text-white font-medium">
                    Australia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!showChat ? (
          <button
            onClick={() => setShowChat(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-blue-500/25"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        ) : (
          <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl w-80 h-96 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <h3 className="text-white font-semibold">Chat with KDI</h3>
              <button
                onClick={() => setShowChat(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm ${
                      msg.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-700 text-gray-300'
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-slate-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;