import { useState } from "react";
import { X, Send } from "lucide-react";
import { Link } from "react-router-dom";
export default function CallbackModal({ onClose = () => {} }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiryFor, setEnquiryFor] = useState("Online Course (Website)");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, phone, enquiryFor, message });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-md rounded-2xl border border-neutral-800 bg-black p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-5 top-5 text-neutral-400 transition-colors hover:text-white"
        >
          <X size={22} />
        </button>

        {/* Header */}
        <div className="mb-7 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-[28px]">
            Create Account
          </h2>
          <p className="mx-auto mt-2 max-w-xs text-sm text-neutral-400">
           Create your account to continue.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label htmlFor="Username" className="mb-1.5 block text-sm text-neutral-300">
              Username
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Username "
              className="w-full rounded-lg border border-neutral-700 bg-black px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-orange-500"
            />
          </div>

          
          <div>
            <label  className="mb-1.5 block text-sm text-neutral-300">
              Email
            </label>
            <div className="flex items-center overflow-hidden rounded-lg border border-neutral-700 bg-black focus-within:border-orange-500">
              
              <input
                
                type="email"
                value={message}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-3 text-sm text-white placeholder-neutral-500 outline-none"
              />
            </div>
          </div>

          
          <div>
            <label  className="mb-1.5 block text-sm text-neutral-300">
              Password
            </label>
            <div className="flex items-center overflow-hidden rounded-lg border border-neutral-700 bg-black focus-within:border-orange-500">
              
              <input
                
                type="password"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-3 text-sm text-white placeholder-neutral-500 outline-none"
              />
            </div>
              
          </div>

          <div>
            <label  className="mb-1.5 block text-sm text-neutral-300">
              Confirm password
            </label>
            <div className="flex items-center overflow-hidden rounded-lg border border-neutral-700 bg-black focus-within:border-orange-500">
              
              <input
                
                type="password"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Confirm your password"
                auto-complete ="new-password"
                className="w-full bg-transparent px-3 py-3 text-sm text-white placeholder-neutral-500 outline-none"
              />
            </div>
              
          </div>

          

          

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/30 transition-transform hover:scale-[1.01] active:scale-[0.99]"
          >
            <Send size={16} className="fill-white" />
            Create account
          </button>
        </form>

        <p className="mt-8 text-center text-zinc-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-400 hover:text-orange-300"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}