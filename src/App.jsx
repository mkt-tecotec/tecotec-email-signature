import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Download, Link as LinkIcon } from 'lucide-react';
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
  const [expandedGuide, setExpandedGuide] = useState(null);
  const [contentHeights, setContentHeights] = useState({});

  const previewRef = useRef(null);
  const contentRefs = useRef({});

  // Fetch templates.json on mount
  useEffect(() => {
    fetch('/tecotec-email-signature/templates.json')
      .then(res => res.json())
      .then(data => {
        setTemplates(data);
        if (data.length > 0) {
          setSelectedTemplateId(data[0].id);
        }
      })
      .catch(err => {
        // Fallback for local dev without base path
        fetch('/templates.json')
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
      fetch(`/tecotec-email-signature${template.htmlPath}`)
        .then(res => res.text())
        .then(html => setTemplateHtml(html))
        .catch(() => {
          // Fallback dev local
          fetch(template.htmlPath)
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
      range.selectNode(previewRef.current);
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

  const measureContent = (guideId) => {
    if (contentRefs.current[guideId]) {
      const height = contentRefs.current[guideId].scrollHeight;
      setContentHeights(prev => ({ ...prev, [guideId]: height }));
    }
  };

  const handleGuideToggle = (guideId) => {
    if (expandedGuide !== guideId) {
      // Delay measurement to let content render
      setTimeout(() => measureContent(guideId), 0);
    }
    setExpandedGuide(expandedGuide === guideId ? null : guideId);
  };

  const guides = [
    {
      id: 'gmail',
      title: 'Gmail (Web)',
      icon: './assets/gmail-webmail-icon.png',
      content: [
        <AppleMailInstructions/>
      ]
    },
    {
      id: 'outlook_win',
      title: 'Outlook (Windows)',
      icon: './assets/outlook-classic-icon.png',
      content: [
        <IosMailInstructions/>
      ]
    },
    {
      id: 'apple_mail',
      title: 'Apple Mail (macOS)',
      icon: './assets/apple-mail-ios.png',
      content: [
        <AirmailInstructions />
      ]
    },
    {
      id: 'spark',
      title: 'Spark (macOS)',
      icon: './assets/spark-macos.png',
      content: [
        <SparkInstructions />
      ]
    },
    {
      id: 'gmail_webmail',
      title: 'Install Signature – Gmail (Web Mail)',
      icon: './assets/gmail-webmail-icon.png',
      content: [
        <GmailWebmailInstructions />
      ]
    },
    {
      id: 'gmail_ios',
      title: 'Install Signature – Gmail (iOS)',
      icon: './assets/gmail-ios-icon.png',
      content: [
        <GmailIosInstructions />
      ]
    },
    {
      id: 'yahoo_webmail',
      title: 'Install Signature – Yahoo (Web Mail)',
      icon: './assets/yahoo-webmail-icon.png',
      content: [
        <YahooWebmailInstructions />
      ]
    },
    {
      id: 'outlook_webmail',
      title: 'Install Signature – Microsoft Outlook Modern (Windows / Web)',
      icon: './assets/outlook-webmail-icon.png',
      content: [
        <OutlookWebmailInstructions />
      ]
    },
    {
      id: 'outlook_ios',
      title: 'Install Signature – Microsoft Outlook (iOS)',
      icon: './assets/outlook-ios-icon.png',
      content: [
        <OutlookIosInstructions />
      ]
    },
    {
      id: 'outlook_classic',
      title: 'Install Signature – Microsoft Outlook Classic (Windows)',
      icon: './assets/outlook-classic-icon.png',
      content: [
        <OutlookClassicInstructions />
      ]
    },
    {
      id: 'mailbird',
      title: 'Install Signature – Mailbird (Windows)',
      icon: './assets/mailbird-icon.png',
      content: [
        <MailbirdInstructions />
      ]
    },
    {
      id: 'emclient',
      title: 'Install Signature – Em Client (Windows)',
      icon: './assets/emclient-icon.png',
      content: [
        <EmClientInstructions />
      ]
    },
    {
      id: 'protonmail',
      title: 'Install Signature – Proton Mail',
      icon: './assets/protonmail-icon.png',
      content: [
        <ProtonMailInstructions />
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
        <div className="accordion">
          {guides.map(guide => (
            <div className="accordion-item" key={guide.id}>
              <button
                className="accordion-header"
                onClick={() => handleGuideToggle(guide.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  width: '100%'
                }}
              >
                {guide.icon && (
                  <img
                    src={guide.icon}
                    alt="Email client icon"
                    style={{ width: '42px', height: '42px', objectFit: 'contain', flexShrink: 0 }}
                  />
                )}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexGrow: 1,
                  padding: '16px 24px'
                }}>
                  <span style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#000000'
                  }}>{guide.title}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: expandedGuide === guide.id ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s'
                    }}
                  />
                </div>
              </button>
              <div
                className={`accordion-content ${expandedGuide === guide.id ? 'open' : ''}`}
                ref={(el) => { contentRefs.current[guide.id] = el; }}
                style={{
                  maxHeight: expandedGuide === guide.id ? `${contentHeights[guide.id] || 'auto'}px` : '0',
                  overflow: 'hidden',
                  padding: expandedGuide === guide.id ? '0 24px 24px' : '0 24px',
                  transition: 'max-height 0.3s ease'
                }}
              >
                <div>
                  {guide.content.map((step, idx) => (
                    <div key={idx}>{step}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
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
