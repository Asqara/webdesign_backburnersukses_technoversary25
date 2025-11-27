import { useState } from "react";

// Component Modal Donasi
interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!amount || !paymentMethod) {
      alert("Mohon lengkapi nominal dan metode pembayaran");
      return;
    }

    if (!isLogin && (!name || !contact)) {
      alert("Mohon lengkapi data Anda");
      return;
    }

    alert(
      `Donasi berhasil!\nNominal: Rp${parseInt(amount).toLocaleString(
        "id-ID"
      )}\nMetode: ${paymentMethod}`
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Donasi Sekarang
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            X
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Nominal Donasi */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Isi Nominal Donasi
            </label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-gray-500 font-medium">
                Rp
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0"
                className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Metode Pembayaran */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Metode pembayaran
            </label>
            <div className="relative">
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
              >
                <option value="">Pilih</option>
                <option value="Transfer Bank">Transfer Bank</option>
                <option value="E-Wallet">E-Wallet</option>
                <option value="Kartu Kredit">Kartu Kredit</option>
                <option value="QRIS">QRIS</option>
              </select>
              <span className="absolute right-4 top-3 text-primary-400 font-medium text-sm">
                Pilih
              </span>
            </div>
          </div>

          {/* Login Toggle */}
          <div className="pt-2">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              {isLogin ? "Logout" : "Login"} atau lengkapi data di bawah ini
            </button>
          </div>

          {/* Form Input */}
          {!isLogin && (
            <>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Lengkap"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Nomor Ponsel atau Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Donasi</p>
            <p className="text-2xl font-bold text-gray-800">
              Rp{amount ? parseInt(amount).toLocaleString("id-ID") : "0"}
            </p>
          </div>
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-[linear-gradient(140deg,#FFF_1.03%,#CDF4AE_93.17%)] text-primary-500 font-semibold rounded-full transition"
          >
            Bayar
          </button>
        </div>
      </div>
    </div>
  );
}
