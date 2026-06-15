export default function BenefitsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Giải pháp giúp cả gia đình an tâm
          </h2>
          <p className="text-lg text-gray-600">
            MedCare được thiết kế chuyên biệt để mang lại lợi ích thực tế cho mọi thành viên trong gia đình.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard 
            title="Dành cho Người Cao Tuổi"
            desc="Giao diện chữ lớn, dễ sử dụng. Tự động nhắc nhở bằng giọng nói, giúp ông bà độc lập hơn trong việc chăm sóc sức khỏe."
            image="https://images.unsplash.com/photo-1558227096-7f415302de1f?auto=format&fit=crop&q=80&w=800"
          />
          <BenefitCard 
            title="Dành cho Người Thân"
            desc="Nhận thông báo ngay lập tức khi ông bà quên uống thuốc hoặc có chỉ số bất thường. Luôn an tâm dù ở xa."
            image="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800"
          />
          <BenefitCard 
            title="Dành cho Người Chăm Sóc"
            desc="Quản lý hồ sơ y tế tập trung, dễ dàng chia sẻ báo cáo với bác sĩ. Công cụ đắc lực hỗ trợ theo dõi điều trị."
            image="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80&w=800"
          />
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ title, desc, image }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-8">
        <h3 className="font-bold text-2xl text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
