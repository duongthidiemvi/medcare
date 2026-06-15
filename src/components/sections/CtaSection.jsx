import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CtaSection() {
  return (
    <section className="py-24 bg-[#faf8ff] relative overflow-hidden px-6">
      <div className="max-w-6xl mx-auto bg-gray-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl border border-gray-800">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-gradient-to-b from-blue-500/20 to-purple-500/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/30 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/30 blur-[80px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 text-blue-300 rounded-2xl mb-8 backdrop-blur-md border border-white/10 shadow-lg">
            <Sparkles size={32} />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.15]">
            Bạn đã sẵn sàng trải nghiệm <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">MedCare?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Cùng hàng ngàn gia đình khác tham gia danh sách chờ để nhận quyền truy cập sớm và các ưu đãi độc quyền.
          </p>
          
          <Link 
            to="/waitlist" 
            className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Đăng ký sớm
            <ArrowRight size={20} className="text-blue-600" />
          </Link>
        </div>
      </div>
    </section>
  );
}
