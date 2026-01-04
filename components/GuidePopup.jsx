import React from 'react';
import { FaTimes, FaInfoCircle, FaPlug, FaWifi, FaCheckCircle, FaCog, FaClock } from 'react-icons/fa';
import { getGuideText } from '@/components/guideText';
import { useLanguage } from '@/components/context/LanguageContext';

const GuidePopup = ({ isOpen, onClose }) => {
  const { locale } = useLanguage();
  const text = getGuideText(locale);
  
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 flex justify-center items-center z-50 p-4">
        <div 
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <FaInfoCircle className="text-3xl" />
              <h2 className="text-2xl font-bold">{text.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-200"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                {text.introduction}
              </p>
            </div>

            {/* Step 1 */}
            <div className="mb-8 bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">
                  {text.step1Number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <FaPlug className="text-blue-500" />
                    {text.step1Title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {text.step1Description}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    {text.step1List.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 bg-white rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-600">
                      <strong>{text.step1Note}</strong> {text.step1NoteText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-8 bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">
                  {text.step2Number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <FaWifi className="text-green-500" />
                    {text.step2Title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {text.step2Description}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    {text.step2List.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-sm text-amber-800">
                      <strong>{text.step2Note}</strong> {text.step2NoteText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-8 bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">
                  {text.step3Number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <FaCog className="text-purple-500" />
                    {text.step3Title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {text.step3Description}
                  </p>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                    {text.step3List.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ol>
                  <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-sm text-red-800">
                      <strong>{text.step3Note}</strong> {text.step3NoteText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="mb-8 bg-amber-50 rounded-xl p-6 border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">
                  {text.step4Number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <FaClock className="text-amber-500" />
                    {text.step4Title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {text.step4Description}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    {text.step4List.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 bg-white rounded-lg border border-amber-200">
                    <p className="text-sm text-gray-600">
                      <strong>{text.step4Note}</strong> {text.step4NoteText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="mb-8 bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-500">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">
                  {text.step5Number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <FaCheckCircle className="text-indigo-500" />
                    {text.step5Title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {text.step5Description}
                  </p>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                    {text.step5List.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ol>
                  <div className="mt-4 p-3 bg-white rounded-lg border border-indigo-200">
                    <p className="text-sm text-gray-600">
                      <strong>{text.step5Note}</strong> {text.step5NoteText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {text.troubleshootingTitle}
              </h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-800">{text.trouble1Title}</p>
                  <p className="text-sm">{text.trouble1Text}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{text.trouble2Title}</p>
                  <p className="text-sm">{text.trouble2Text}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{text.trouble3Title}</p>
                  <p className="text-sm">{text.trouble3Text}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{text.trouble4Title}</p>
                  <p className="text-sm">{text.trouble4Text}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{text.trouble5Title}</p>
                  <p className="text-sm">{text.trouble5Text}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-gray-50 p-6 rounded-b-2xl border-t border-gray-200">
            <button
              onClick={onClose}
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {text.footerButton}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuidePopup;