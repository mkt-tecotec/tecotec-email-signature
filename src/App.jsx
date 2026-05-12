import React, { useState, useEffect, useRef } from 'react';
import { Download, Link as LinkIcon, X } from 'lucide-react';
import GroupIcon from './components/group-icon';
import AppleMailInstructions from './components/apple-mail-instructions';
import IosMailInstructions from './components/ios-mail-instructions';
import AirmailInstructions from './components/airmail-instructions';
import SparkInstructions from './components/spark-instructions';
import GmailWebmailInstructions from './components/gmail-webmail-instructions';
import GmailIosInstructions from './components/gmail-ios-instructions';
import YahooWebmailInstructions from './components/yahoo-webmail-instructions';
import OutlookWebmailInstructions from './components/outlook-webmail-instructions';
import OutlookIosInstructions from './components/outlook-ios-instructions';
import OutlookClassicInstructions from './components/outlook-classic-instructions';
import MailbirdInstructions from './components/mailbird-instructions';
import EmClientInstructions from './components/emclient-instructions';
import ProtonMailInstructions from './components/protonmail-instructions';
import ThunderbirdInstructions from './components/thunderbird-instructions';
import Win10MailInstructions from './components/win10-mail-instructions';

export default function App() {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplateId, setSelectedTemplateId] = useState('');
  const [templateHtml, setTemplateHtml] = useState('');
  const [formData, setFormData] = useState({
    name: 'Tuyen Pham',
    position: 'Marketing Manager',
    department: 'Marketing Dept',
    phone: '+84 987 654 321',
    email: 'tuyenpv@tecotec.com.vn',
    website: 'tecotec.com.vn',
    address: '2nd Floor, CT3A Building, Mễ Trì Thượng, Nam Từ Liêm, HN',
  });
  const [toastMessage, setToastMessage] = useState('');
  const [activeModalGuide, setActiveModalGuide] = useState(null);

  const previewRef = useRef(null);

  // Fetch templates.json on mount
  useEffect(() => {
    fetch('/tecotec-email-signature/templates.json?t=' + Date.now())
      .then(res => res.json())
      .then(data => {
        setTemplates(data);
        if (data.length > 0) {
          setSelectedTemplateId(data[0].id);
        }
      })
      .catch(err => {
        // Fallback for local dev without base path
        fetch('/templates.json?t=' + Date.now())
          .then(res => res.json())
          .then(data => {
            setTemplates(data);
            if (data.length > 0) {
              setSelectedTemplateId(data[0].id);
            }
          })
          .catch(e => console.error("Could not load templates.json", e));
      });
  }, []);

  // Fetch HTML file when selected Template changes
  useEffect(() => {
    if (!selectedTemplateId) return;
    const template = templates.find(t => t.id === selectedTemplateId);
    if (template) {
      // Try with /tecotec-email-signature/ first (GitHub Pages base)
      fetch(`/tecotec-email-signature${template.htmlPath}?t=` + Date.now())
        .then(res => res.text())
        .then(html => setTemplateHtml(html))
        .catch(() => {
          // Fallback dev local
          fetch(`${template.htmlPath}?t=` + Date.now())
            .then(res => res.text())
            .then(html => setTemplateHtml(html));
        });
    }
  }, [selectedTemplateId, templates]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Generate the final HTML with replaced variables
  const generateSignatureHtml = () => {
    if (!templateHtml) return '<p>Loading template...</p>';
    
    let html = templateHtml;
    // Replace standard placeholders
    html = html.replace(/{{name}}/g, formData.name || '');
    html = html.replace(/{{position}}/g, formData.position || '');
    html = html.replace(/{{department}}/g, formData.department || '');
    html = html.replace(/{{phone}}/g, formData.phone || '');
    html = html.replace(/{{email}}/g, formData.email || '');
    html = html.replace(/{{website}}/g, formData.website || '');
    html = html.replace(/{{address}}/g, formData.address || '');
    
    // Convert relative logo paths to absolute if needed, or leave them if they are hosted like https://marcom...
    
    return html;
  };

  const copyToClipboard = () => {
    if (previewRef.current) {
      const range = document.createRange();
      range.selectNodeContents(previewRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      try {
        document.execCommand('copy');
        showToast('Đã sao chép chữ ký vào khay nhớ tạm!');
      } catch (err) {
        showToast('Lỗi khi sao chép');
      }
      selection.removeAllRanges();
    }
  };

  const downloadHtml = () => {
    const finalHtml = generateSignatureHtml();
    const blob = new Blob([finalHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'signature.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const handleOpenModal = (guideId) => {
    setActiveModalGuide(guideId);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setActiveModalGuide(null);
    document.body.style.overflow = '';
  };

  const guides = [
    {
      id: 'gmail_webmail',
      title: 'Gmail (Web Mail)',
      icon: './images/icons/gmail__web_mail_.png',
      content: [
        <GmailWebmailInstructions />
      ]
    },
    {
      id: 'apple_mail',
      title: 'Apple Mail (macOS)',
      icon: './images/icons/apple_mail__macos_.png',
      content: [
        <AppleMailInstructions/>
      ]
    },
    {
      id: 'outlook_webmail',
      title: 'Microsoft Outlook (Web)',
      icon: './images/icons/microsoft_outlook_modern__web_.png',
      content: [
        <OutlookWebmailInstructions />
      ]
    },
    {
      id: 'spark',
      title: 'Spark (macOS)',
      icon: './images/icons/spark__macos_.png',
      content: [
        <SparkInstructions />
      ]
    },
    {
      id: 'gmail_ios',
      title: 'Gmail (iOS)',
      icon: './images/icons/gmail__ios_.png',
      content: [
        <GmailIosInstructions />
      ]
    },
    {
      id: 'ios_mail',
      title: 'Mail App (iOS)',
      icon: './images/icons/mail_app__ios_.png',
      content: [
        <IosMailInstructions/>
      ]
    },
    {
      id: 'outlook_ios',
      title: 'Microsoft Outlook (iOS)',
      icon: './images/icons/microsoft_outlook__ios_.png',
      content: [
        <OutlookIosInstructions />
      ]
    },
    {
      id: 'outlook_classic',
      title: 'Microsoft Outlook Classic (Windows)',
      icon: './images/icons/microsoft_outlook_classic__windows_.png',
      content: [
        <OutlookClassicInstructions />
      ]
    },
    {
      id: 'yahoo_webmail',
      title: 'Yahoo (Web Mail)',
      icon: './images/icons/yahoo__web_mail_.png',
      content: [
        <YahooWebmailInstructions />
      ]
    },
    {
      id: 'airmail',
      title: 'Airmail',
      icon: './images/icons/airmail__macos_.png',
      content: [
        <AirmailInstructions />
      ]
    },
    {
      id: 'protonmail',
      title: 'Proton Mail',
      icon: './images/icons/proton_mail.png',
      content: [
        <ProtonMailInstructions />
      ]
    },
    {
      id: 'mailbird',
      title: 'Mailbird (Windows)',
      icon: './images/icons/mailbird__windows_.png',
      content: [
        <MailbirdInstructions />
      ]
    },
    {
      id: 'emclient',
      title: 'Em Client (Windows)',
      icon: './images/icons/em_client__windows_.png',
      content: [
        <EmClientInstructions />
      ]
    },
    {
      id: 'thunderbird',
      title: 'Mozilla Thunderbird (Windows)',
      icon: './images/icons/mozilla_thunderbird__windows_.png',
      content: [
        <ThunderbirdInstructions />
      ]
    },
    {
      id: 'win10_mail',
      title: 'Mail App (Windows 10)',
      icon: './images/icons/mail_app__windows_10_.png',
      content: [
        <Win10MailInstructions />
      ]
    }
  ];

  return (
    <div className="container">
      <header>
        <div className="logo-text">TECOTEC</div>
        <h1>Email Signature Generator</h1>
        <a href="#guide" className="header-link">Hướng dẫn cài đặt</a>
      </header>

      <div className="workspace">
        {/* Left Column: Form */}
        <div className="card">
          <h2 className="card-title">Nhập thông tin cá nhân</h2>
          
          <div className="form-group">
            <label>Mẫu chữ ký (Identity)</label>
            <select 
              className="form-control" 
              value={selectedTemplateId} 
              onChange={(e) => setSelectedTemplateId(e.target.value)}
            >
              {templates.map(t => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Họ và tên *</label>
            <input 
              type="text" 
              className="form-control" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              required
            />
          </div>

          <div className="form-group">
            <label>Chức vụ</label>
            <input 
              type="text" 
              className="form-control" 
              name="position" 
              value={formData.position} 
              onChange={handleInputChange} 
            />
          </div>

          <div className="form-group">
            <label>Số điện thoại</label>
            <input 
              type="tel" 
              className="form-control" 
              name="phone" 
              value={formData.phone} 
              onChange={handleInputChange} 
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input 
              type="email" 
              className="form-control" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              required
            />
          </div>

          <div className="actions">
            <button className="btn btn-primary" onClick={copyToClipboard}>
              <GroupIcon size={16} /> Sao chép chữ ký
            </button>
            <button className="btn btn-secondary" onClick={downloadHtml}>
              <Download size={16} /> Tải xuống HTML
            </button>
          </div>
          
          <div style={{marginTop: '16px', textAlign: 'center'}}>
             <a href="#guide" className="header-link">Hướng dẫn cài đặt ↓</a>
          </div>
        </div>

        {/* Right Column: Preview */}
        <div className="card">
          <h2 className="card-title">Xem trước chữ ký (Live Preview)</h2>
          <div className="preview-area">
            {/* We render the raw HTML using dangerouslySetInnerHTML */}
            <div 
              ref={previewRef}
              dangerouslySetInnerHTML={{ __html: generateSignatureHtml() }}
            />
          </div>
        </div>
      </div>

      <div className="guide-section" id="guide">
        <h2>Hướng dẫn cài đặt</h2>
        <div className="guide-grid">
          {guides.map(guide => (
            <div 
              className="guide-card" 
              key={guide.id}
              onClick={() => handleOpenModal(guide.id)}
            >
              {guide.icon && (
                <img
                  src={guide.icon}
                  alt={guide.title}
                />
              )}
              <span>{guide.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <div 
        className={`modal-overlay ${activeModalGuide ? 'open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) handleCloseModal();
        }}
      >
        {activeModalGuide && (() => {
          const currentGuide = guides.find(g => g.id === activeModalGuide);
          return (
            <div className="modal-container">
              <div className="modal-header">
                <div className="modal-header-left">
                  {currentGuide.icon && <img src={currentGuide.icon} alt="Icon" />}
                  <span className="modal-header-title">Cài đặt cho {currentGuide.title}</span>
                </div>
                <button className="modal-close" onClick={handleCloseModal}>
                  <X size={20} />
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-sidebar">
                  <div style={{ padding: '0 24px 12px', fontSize: '14px', fontWeight: '600', color: '#666' }}>
                    Chọn ứng dụng
                  </div>
                  {guides.map(guide => (
                    <div 
                      key={guide.id}
                      className={`sidebar-item ${activeModalGuide === guide.id ? 'active' : ''}`}
                      onClick={() => setActiveModalGuide(guide.id)}
                    >
                      {guide.icon && <img src={guide.icon} alt="" />}
                      <span>{guide.title}</span>
                    </div>
                  ))}
                </div>
                <div className="modal-content-area">
                  {currentGuide.content.map((step, idx) => (
                    <div key={idx}>{step}</div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      <footer>
        &copy; {new Date().getFullYear()} TECOTEC Group. All rights reserved.
      </footer>

      {/* Toast Notification */}
      <div className={`toast ${toastMessage ? 'show' : ''}`}>
        {toastMessage}
      </div>
    </div>
  );
}
