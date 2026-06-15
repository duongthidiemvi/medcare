import { ShieldCheck, HeartPulse, Users, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhyChooseSection() {
  const cards = [
    {
      id: "01",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Đơn giản cho người cao tuổi",
      description: "Giao diện được thiết kế với chữ lớn, thao tác dễ hiểu và trải nghiệm thân thiện, giúp người lớn tuổi sử dụng dễ dàng mà không cần am hiểu công nghệ.",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      id: "02",
      icon: <HeartPulse className="w-8 h-8 text-indigo-600" />,
      title: "Theo dõi sức khỏe toàn diện",
      description: "Từ thuốc men, lịch khám bệnh đến các chỉ số sức khỏe hằng ngày, mọi thông tin quan trọng đều được quản lý trong một nền tảng duy nhất.",
      gradient: "from-indigo-500/10 to-purple-500/10"
    },
    {
      id: "03",
      icon: <Users className="w-8 h-8 text-violet-600" />,
      title: "Kết nối gia đình",
      description: "Con cháu có thể đồng hành cùng ông bà từ bất cứ đâu, nhận thông báo và cập nhật tình trạng sức khỏe theo thời gian thực.",
      gradient: "from-violet-500/10 to-fuchsia-500/10"
    },
    {
      id: "04",
      icon: <Sparkles className="w-8 h-8 text-sky-600" />,
      title: "Cá nhân hóa thông minh",
      description: "MedCare hỗ trợ xây dựng thói quen lành mạnh và nhắc nhở phù hợp với nhu cầu riêng của từng người dùng.",
      gradient: "from-sky-500/10 to-blue-500/10"
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium text-sm mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Why MedCare
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Tại sao hàng ngàn gia đình sẽ lựa chọn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">MedCare?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            MedCare không chỉ là một ứng dụng theo dõi sức khỏe. Chúng tôi xây dựng một người bạn đồng hành giúp người cao tuổi sống chủ động hơn và giúp gia đình an tâm hơn mỗi ngày.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image/Icon placeholder area matching image style */}
              <div className={`h-48 bg-gradient-to-br ${card.gradient} relative overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                 <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                   {card.id}
                 </div>
                 <div className="w-20 h-20 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                   {card.icon}
                 </div>
                 {/* Decorative elements */}
                 <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/40 rounded-full blur-2xl"></div>
                 <div className="absolute top-10 -left-10 w-24 h-24 bg-white/40 rounded-full blur-xl"></div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>
                <Link to="/feature" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mt-auto">
                  Khám phá tính năng <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Features Button */}
        <div className="text-center mb-24">
          <Link 
            to="/feature"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Xem tất cả tính năng
          </Link>
        </div>

        {/* Trust Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-10 md:p-16 shadow-2xl">
          {/* Glassmorphism background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <Sparkles className="w-10 h-10 text-blue-300 mx-auto mb-8 opacity-80" />
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight">
                "Chăm sóc người thân không chỉ là nhớ uống thuốc, mà là tạo nên <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">sự an tâm mỗi ngày.</span>"
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">01</div>
                <div className="text-blue-100/80 text-sm md:text-base">Thiết kế dành riêng cho người cao tuổi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-100/80 text-sm md:text-base">Đồng hành cùng gia đình</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-blue-100/80 text-sm md:text-base">Tập trung vào trải nghiệm đơn giản</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">∞</div>
                <div className="text-blue-100/80 text-sm md:text-base">Không ngừng cải tiến từ phản hồi</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
