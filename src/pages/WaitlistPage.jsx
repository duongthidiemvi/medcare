import { useState } from "react";
import { Sparkles, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "con-chau",
    message: ""
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
      setError("Vui lòng điền đầy đủ tên và email.");
      return;
    }
    
    setLoading(true);
    setError("");

    try {
      // Gửi ngầm dữ liệu lên Firebase mà không bắt người dùng phải đợi (Optimistic UI)
      addDoc(collection(db, "waitlist"), {
        ...formData,
        createdAt: serverTimestamp()
      }).catch(err => {
        console.error("Lỗi khi lưu dữ liệu ngầm: ", err);
      });

      // Hiển thị thành công ngay lập tức với độ trễ nhỏ để tạo cảm giác tự nhiên
      setTimeout(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", role: "con-chau", message: "" });
        setLoading(false);
      }, 600);

    } catch (err) {
      console.error("Error: ", err);
      setError("Có lỗi xảy ra khi xử lý thông tin. Vui lòng thử lại sau.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eef1ff] text-blue-700 font-semibold text-xs tracking-wider mb-8">
            <Sparkles size={14} />
            THAM GIA NGAY
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-gray-900 tracking-tight mb-6 leading-[1.15]">
            Hãy là người đầu tiên biết khi chúng tôi ra mắt.
          </h1>
          
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-md">
            Đăng ký ngay để nhận quyền truy cập sớm và các ưu đãi độc quyền.
          </p>
          
          <div className="space-y-5 mb-12">
            <div className="flex items-center gap-4">
              <span className="text-2xl">🎯</span>
              <span className="text-gray-600 text-base">Dành cho gia đình & người cao tuổi</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl">🔒</span>
              <span className="text-gray-600 text-base">No spam, ever</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl">⚡</span>
              <span className="text-gray-600 text-base">Early access perks</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50/50">
          {success ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Đăng ký thành công!</h3>
              <p className="text-gray-600 mb-8">
                Cảm ơn bạn đã quan tâm. Chúng tôi sẽ thông báo cho bạn ngay khi MedCare chính thức ra mắt.
              </p>
              <button 
                onClick={() => setSuccess(false)}
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Đăng ký tài khoản khác
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {error && (
                <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-3">Tên của bạn</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nhập tên của bạn" 
                  className="w-full px-5 py-3.5 rounded-xl bg-[#f2f3ff]/60 border border-blue-100/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-gray-800 placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-3">Địa chỉ email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Nhập địa chỉ email" 
                  className="w-full px-5 py-3.5 rounded-xl bg-[#f2f3ff]/60 border border-blue-100/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-gray-800 placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-3">Vai trò</label>
                <select 
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl bg-[#f2f3ff]/60 border border-blue-100/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-gray-800 appearance-none"
                >
                  <option value="con-chau">Tôi là con/cháu</option>
                  <option value="nguoi-cao-tuoi">Tôi là người cao tuổi</option>
                  <option value="nguoi-cham-soc">Tôi là người chăm sóc</option>
                  <option value="nhan-vien-y-te">Nhân viên y tế</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-3">Bạn muốn nhắn nhủ gì thêm không? (Tùy chọn)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Ví dụ: Tính năng mà bạn mong muốn nhất..." 
                  className="w-full px-5 py-3.5 rounded-xl bg-[#f2f3ff]/60 border border-blue-100/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-gray-800 placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#1e78b9] hover:bg-[#186299] disabled:bg-blue-300 text-white font-semibold text-lg py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-6"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Đang gửi...
                  </>
                ) : (
                  <>
                    Thông báo cho tôi
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
              
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
