import { Pill, Activity, Users, HeartPulse, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturesSection() {
  return (
    <div className="bg-[#faf8ff]">
      {/* PAGE HEADER */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto text-center border-b border-gray-200">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 border border-blue-100 px-5 py-2.5 rounded-full font-semibold text-sm mb-8 shadow-sm">
          <Sparkles size={18} />
          <span>Core Features</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight max-w-4xl mx-auto leading-[1.15]">
          Những tính năng giúp việc chăm sóc trở nên dễ dàng hơn
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16">
          MedCare được thiết kế để đồng hành cùng người cao tuổi và gia đình trong mọi hoạt động chăm sóc sức khỏe hằng ngày.
        </p>
      </section>

      {/* FEATURE 01 */}
      <FeatureBlock 
        align="right"
        badge="Feature 01"
        title="Nhắc thuốc tự động"
        desc="Không còn lo quên thuốc hay uống sai giờ. MedCare giúp người cao tuổi duy trì thói quen dùng thuốc một cách đơn giản và chính xác."
        features={["Nhắc uống thuốc đúng giờ", "Quản lý nhiều loại thuốc", "Theo dõi lịch sử dùng thuốc", "Nhắc tái mua thuốc", "Thông báo khi bỏ lỡ thuốc", "Theo dõi mức độ tuân thủ điều trị"]}
        image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800"
        benefit="Giúp duy trì hiệu quả điều trị và giảm nguy cơ quên thuốc."
        icon={<Pill size={20} />}
        color="blue"
      />

      {/* FEATURE 02 */}
      <FeatureBlock 
        align="left"
        badge="Feature 02"
        title="Theo dõi sức khỏe"
        desc="Lưu trữ và theo dõi các chỉ số sức khỏe quan trọng trong một giao diện trực quan, dễ sử dụng."
        features={["Huyết áp", "Đường huyết", "Nhịp tim", "Cân nặng", "BMI", "Biểu đồ theo dõi sức khỏe", "Báo cáo sức khỏe định kỳ"]}
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
        benefit="Giúp phát hiện sớm các thay đổi bất thường và theo dõi tiến triển sức khỏe theo thời gian."
        icon={<Activity size={20} />}
        color="green"
      />

      {/* FEATURE 03 */}
      <FeatureBlock 
        align="right"
        badge="Feature 03"
        title="Kết nối gia đình"
        desc="Giúp con cháu đồng hành cùng ông bà dù ở bất cứ đâu."
        features={["Theo dõi sức khỏe từ xa", "Nhận thông báo khi quên thuốc", "Chia sẻ tình trạng sức khỏe", "Cập nhật hoạt động hằng ngày", "Báo cáo sức khỏe cho người thân", "Quản lý nhiều thành viên trong gia đình"]}
        image="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800"
        benefit="Mang lại sự an tâm cho cả người cao tuổi và gia đình."
        icon={<Users size={20} />}
        color="orange"
      />

      {/* FEATURE 04 */}
      <FeatureBlock 
        align="left"
        badge="Feature 04"
        title="Hỗ trợ sinh hoạt hằng ngày"
        desc="Không chỉ chăm sóc sức khỏe, MedCare còn hỗ trợ xây dựng những thói quen sống lành mạnh mỗi ngày."
        features={["Nhắc uống nước", "Nhắc vận động", "Nhắc ăn uống đúng giờ", "Theo dõi giấc ngủ", "Gợi ý bài tập nhẹ nhàng", "Theo dõi mục tiêu sức khỏe", "Nhật ký hoạt động hằng ngày"]}
        image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800"
        benefit="Giúp người cao tuổi duy trì cuộc sống chủ động và khỏe mạnh hơn."
        icon={<HeartPulse size={20} />}
        color="rose"
      />

      {/* FEATURE 05 */}
      <FeatureBlock 
        align="right"
        badge="Feature 05"
        title="Trợ lý sức khỏe AI"
        desc="Một trợ lý thông minh luôn sẵn sàng hỗ trợ người dùng và gia đình."
        features={["Giải đáp câu hỏi sức khỏe cơ bản", "Giải thích chỉ số sức khỏe", "Hướng dẫn sử dụng ứng dụng", "Gợi ý thói quen lành mạnh", "Hỗ trợ 24/7", "Cá nhân hóa trải nghiệm"]}
        image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
        benefit="Tiếp cận thông tin nhanh chóng và dễ hiểu hơn cho mọi người dùng."
        icon={<Sparkles size={20} />}
        color="indigo"
      />

      {/* EXPLORE MORE */}
      <section className="py-20 bg-white relative overflow-hidden border-b border-gray-200">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#faf8ff] to-white pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Explore More</h2>
            <p className="text-xl text-gray-600">Các tính năng bổ sung giúp trải nghiệm của bạn trọn vẹn hơn</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Lưu đơn thuốc", "Kết quả xét nghiệm", "Nhật ký sức khỏe", 
              "Kiến thức sức khỏe", "Dinh dưỡng người cao tuổi", "Cảnh báo bất thường", 
              "Thông báo khẩn cấp", "Đồng bộ đa thiết bị", "Sao lưu dữ liệu", 
              "Bảo mật thông tin", "Báo cáo tuần/tháng"
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl flex flex-col justify-center border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors">
                <CheckCircle2 className="text-blue-500 mb-4" size={24} />
                <span className="font-semibold text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
            Bạn đã sẵn sàng trải nghiệm MedCare?
          </h2>
          <Link to="/waitlist" className="inline-flex bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 items-center justify-center gap-2">
            Đăng ký sớm
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureBlock({ align, badge, title, desc, features, image, benefit, icon, color }) {
  const colorMap = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    green: "bg-green-50 text-green-600 border-green-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    orange: "bg-orange-50 text-orange-600 border-orange-100",
    rose: "bg-rose-50 text-rose-600 border-rose-100",
    teal: "bg-teal-50 text-teal-600 border-teal-100",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100"
  };
  const iconColorMap = {
    blue: "text-blue-500",
    green: "text-green-500",
    purple: "text-purple-500",
    orange: "text-orange-500",
    rose: "text-rose-500",
    teal: "text-teal-500",
    indigo: "text-indigo-500"
  };

  return (
    <section className="py-16 md:py-20 border-b border-gray-200 last:border-0 hover:bg-white/50 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className={`order-2 ${align === 'left' ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 border-8 border-white bg-white aspect-[4/3] group">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent mix-blend-multiply"></div>
          </div>
        </div>

        <div className={`order-1 ${align === 'left' ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm mb-8 border ${colorMap[color]}`}>
            {icon}
            <span>{badge}</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">{title}</h3>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            {desc}
          </p>

          <div className="grid sm:grid-cols-2 gap-y-5 gap-x-8 mb-12">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className={`flex-shrink-0 mt-0.5 ${iconColorMap[color]}`} size={22} />
                <span className="text-gray-800 font-medium text-lg">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-[2rem] p-8 flex items-start gap-5 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="bg-gray-800 p-3 rounded-2xl text-white">
              <Sparkles size={28} />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-2">Lợi ích mang lại</p>
              <p className="text-white font-medium text-lg leading-relaxed">{benefit}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
