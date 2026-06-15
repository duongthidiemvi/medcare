import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

export default function WaitlistSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError("Vui lòng điền đầy đủ họ tên và email.");
      return;
    }
    
    setLoading(true);
    setError("");

    try {
      addDoc(collection(db, "waitlist"), {
        ...formData,
        createdAt: serverTimestamp()
      }).catch(err => console.error("Lỗi khi lưu dữ liệu ngầm: ", err));

      setTimeout(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", role: "" });
        setLoading(false);
      }, 600);

    } catch (err) {
      console.error("Error: ", err);
      setError("Có lỗi xảy ra khi xử lý thông tin. Vui lòng thử lại sau.");
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[100%] rounded-full bg-blue-500 blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[100%] rounded-full bg-blue-700 blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Trở thành những người đầu tiên trải nghiệm MedCare
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Đăng ký ngay để nhận thông báo khi phiên bản đầu tiên được ra mắt cùng nhiều đặc quyền hấp dẫn.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Nhận thông báo sớm nhất",
                  "Tham gia dùng thử miễn phí",
                  "Góp ý phát triển sản phẩm",
                  "Trải nghiệm các tính năng độc quyền"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="text-blue-600 flex-shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              {success ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Đăng ký thành công!</h3>
                  <p className="text-gray-600 mb-8">
                    Cảm ơn bạn đã quan tâm. Chúng tôi sẽ thông báo cho bạn ngay khi MedCare ra mắt.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Đăng ký tài khoản khác
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {error && (
                    <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Họ và Tên</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nguyễn Văn A" 
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition bg-white" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com" 
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition bg-white" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0901234567" 
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition bg-white" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bạn quan tâm với vai trò là?</label>
                    <select 
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition bg-white appearance-none"
                    >
                      <option value="">Chọn vai trò</option>
                      <option value="elderly">Người cao tuổi</option>
                      <option value="family">Con / Cháu</option>
                      <option value="caregiver">Người chăm sóc</option>
                      <option value="medical">Nhân viên y tế</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 mt-4 disabled:bg-blue-400"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Đang xử lý...
                      </>
                    ) : (
                      "Tham Gia Danh Sách Chờ"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
