import { ArrowRight, Heart, Star, Users, Target, MessageSquare, Quote, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <div className="bg-[#faf8ff] overflow-hidden">
      
      {/* SECTION HEADER */}
      <section className="relative pt-32 pb-24 px-6 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-blue-300/30 to-purple-300/30 blur-[100px] rounded-full pointer-events-none animate-float"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white text-blue-600 border border-blue-100 px-5 py-2.5 rounded-full font-semibold text-sm mb-8 shadow-sm">
            <Users size={16} />
            <span>Building Together</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight leading-tight">
            Chúng tôi không xây dựng <br className="hidden md:block"/> MedCare một mình
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Mỗi tính năng, mỗi cải tiến và mỗi quyết định đều được hình thành từ những câu chuyện thực tế của người cao tuổi và gia đình Việt Nam.
          </p>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up delay-100">
          <div className="mb-12 text-blue-300 flex justify-center">
            <Quote size={64} className="opacity-50" />
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight">
            "Công nghệ không thay thế sự quan tâm.<br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Công nghệ giúp việc quan tâm trở nên dễ dàng hơn."</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            MedCare được tạo ra với mong muốn giúp người cao tuổi sống chủ động hơn mỗi ngày và giúp gia đình luôn cảm thấy an tâm dù không thể ở bên cạnh người thân mọi lúc.
          </p>
        </div>
      </section>

      {/* COMMUNITY IMPACT */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: "100+", title: "Người quan tâm", desc: "Những người đầu tiên đang theo dõi hành trình phát triển của MedCare.", icon: <Heart className="text-rose-500" /> },
            { num: "50+", title: "Góp ý sản phẩm", desc: "Ý kiến thực tế từ gia đình và người cao tuổi.", icon: <MessageSquare className="text-blue-500" /> },
            { num: "10+", title: "Người dùng thử nghiệm", desc: "Đang trải nghiệm các phiên bản đầu tiên của MedCare.", icon: <Star className="text-yellow-500" /> },
            { num: "1", title: "Sứ mệnh chung", desc: "Mang lại cuộc sống khỏe mạnh và chủ động hơn cho người cao tuổi.", icon: <Target className="text-indigo-500" /> }
          ].map((stat, idx) => (
            <div key={idx} className={`bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 animate-fade-in-up delay-${(idx+1)*100} hover:-translate-y-2 transition-transform duration-500`}>
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                {stat.icon}
              </div>
              <h4 className="text-4xl font-extrabold text-gray-900 mb-2">{stat.num}</h4>
              <p className="font-bold text-gray-800 text-lg mb-3">{stat.title}</p>
              <p className="text-gray-500 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VOICES FROM THE COMMUNITY */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 animate-float"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Những điều chúng tôi thường được chia sẻ</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Tôi chỉ mong có một cách đơn giản để biết hôm nay mẹ mình vẫn ổn.",
              "Ông bà thường nói mình khỏe, nhưng gia đình vẫn luôn lo lắng.",
              "Không phải lúc nào tôi cũng ở nhà để nhắc bố mẹ uống thuốc.",
              "Nếu có một ứng dụng thật dễ dùng cho người lớn tuổi thì sẽ rất hữu ích."
            ].map((quote, idx) => (
              <div key={idx} className={`bg-[#faf8ff] p-10 rounded-[2rem] border border-blue-100/50 shadow-sm animate-fade-in-up delay-${(idx%2+1)*200} flex items-start gap-6`}>
                <Quote size={40} className="text-blue-300 flex-shrink-0" />
                <p className="text-xl text-gray-700 font-medium leading-relaxed italic">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Những giá trị định hướng MedCare</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { icon: "💙", title: "Lấy người dùng làm trung tâm", desc: "Mọi quyết định đều bắt đầu từ nhu cầu thực tế của người cao tuổi và gia đình." },
              { icon: "🌱", title: "Đơn giản là ưu tiên hàng đầu", desc: "Một sản phẩm tốt là sản phẩm mà bất kỳ ai cũng có thể sử dụng." },
              { icon: "🤝", title: "Đồng hành lâu dài", desc: "Không chỉ là một ứng dụng, MedCare hướng tới việc trở thành người bạn đồng hành trong hành trình chăm sóc sức khỏe." }
            ].map((value, idx) => (
              <div key={idx} className={`glass bg-white/60 p-12 rounded-[3rem] text-center animate-fade-in-up delay-${(idx+1)*200} hover:bg-white/80 transition-colors duration-500`}>
                <div className="text-6xl mb-8 animate-bounce-slow">{value.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">{value.title}</h4>
                <p className="text-gray-600 text-lg leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      
    </div>
  );
}
