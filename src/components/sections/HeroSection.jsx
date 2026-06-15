import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-dot-pattern">
      {/* Background gradients similar to design */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-gradient-to-b from-blue-50/50 to-white/80">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#1d7af0]/10 blur-[120px]"></div>
        <div className="absolute top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-200/20 blur-[100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200 text-[#1d7af0] px-5 py-2 rounded-full font-semibold text-xs tracking-wide uppercase mb-10 shadow-sm">
          <span className="w-1.5 h-1.5 bg-[#1d7af0] rounded-full animate-pulse"></span>
          NỀN TẢNG Y TẾ HÀNG ĐẦU VIỆT NAM
        </div>

        {/* Main Heading */}
        <h1 className="text-[3.5rem] md:text-[5.5rem] leading-[1.1] font-black text-[#1e293b] tracking-tight mb-8">
          Nâng tầm sức khỏe <br />
          <span className="text-[#1d7af0]">
            Phát triển tương lai
          </span>
        </h1>

        {/* Sub Heading */}
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
          Nền tảng Quản lý & Chăm sóc sức khỏe tích hợp AI đầu tiên dành riêng cho bạn. Kết nối, cải thiện và bảo vệ sức khỏe trên mọi hành trình.
        </p>

        {/* CTA Button */}
        <Link
          to="/waitlist"
          className="bg-[#1d7af0] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#1565c0] hover:shadow-xl hover:shadow-[#1d7af0]/30 transition-all transform hover:-translate-y-1"
        >
          Truy cập sớm <ArrowRight size={20} className="ml-1" />
        </Link>
      </div>
    </section>
  );
}
