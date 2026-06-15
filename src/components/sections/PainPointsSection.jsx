import { Pill, CalendarDays, Activity, Heart } from "lucide-react";

export default function PainPointsSection() {
  const painPoints = [
    { icon: <Pill size={24} />, text: "Quên uống thuốc đúng giờ hoặc uống sai liều lượng" },
    { icon: <CalendarDays size={24} />, text: "Bỏ lỡ lịch khám bệnh định kỳ với bác sĩ" },
    { icon: <Activity size={24} />, text: "Khó theo dõi chỉ số sức khỏe liên tục từ xa" },
    { icon: <Heart size={24} />, text: "Con cháu luôn lo lắng khi không ở bên cạnh" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Những khó khăn mà nhiều gia đình đang gặp phải
          </h2>
          <p className="text-lg text-gray-600">
            Khi cha mẹ ngày càng lớn tuổi, việc tự quản lý sức khỏe trở nên khó khăn hơn, gây ra nhiều áp lực vô hình cho cả gia đình.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-red-50/50 border border-red-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-red-100 text-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                {point.icon}
              </div>
              <p className="font-medium text-gray-800 text-lg leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
