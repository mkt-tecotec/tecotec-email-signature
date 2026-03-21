import React, { useState, useEffect, useRef } from 'react';
import { Mail, X, Copy, Download, Link as LinkIcon } from 'lucide-react';

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
const [instructionData, setInstructionData] = useState([]);
  const [selectedClientGuide, setSelectedClientGuide] = useState(null);
  
  const previewRef = useRef(null);

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

// Load instruction data from Figma JSON
useEffect(() => {
  fetch('/tecotec-email-signature/figma_data.json')
    .then(res => res.json())
    .then(data => setInstructionData(data))
    .catch(err => {
      fetch('/figma_data.json')
        .then(res => res.json())
        .then(data => setInstructionData(data))
        .catch(e => console.error('Failed to load Figma instructions', e));
    });
}, []);
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

  const guides = [
    {
      id: 'gmail',
      title: 'Gmail (Web)',
      content: [
        'Nhấn nút "Sao chép chữ ký" ở bên trên.',
        'Mở Gmail, vào Cài đặt (biểu tượng bánh răng) > Xem tất cả cài đặt.',
        'Kéo xuống phần "Chữ ký" (Signature).',
        'Tạo chữ ký mới, sau đó Dán (Ctrl+V / Cmd+V) nội dung vào khung soạn thảo.',
        'Chọn chữ ký vừa tạo cho "Email sử dụng mới" hoặc "Email trả lời/chuyển tiếp".',
        'Kéo xuống cuối trang và nhấn "Lưu thay đổi".'
      ]
    },
    {
      id: 'outlook_win',
      title: 'Outlook (Windows)',
      content: [
        'Nhấn nút "Sao chép chữ ký".',
        'Mở Outlook, vào File > Options > Mail > Signatures.',
        'Nhấn "New" để tạo chữ ký mới.',
        'Dán (Ctrl+V) vào ô soạn thảo. Đảm bảo ô "Keep Source Formatting" được chọn để giữ nguyên thiết kế.',
        'Nhấn OK để lưu lại.'
      ]
    },
    {
      id: 'apple_mail',
      title: 'Apple Mail (macOS)',
      content: [
        'Nhấn nút "Sao chép chữ ký".',
        'Mở ứng dụng Mail, vào Mail > Settings (hoặc Preferences) > Signatures.',
        'Chọn tài khoản email bên cột trái, nhấn dấu cộng (+) ở giữa.',
        'Bỏ chọn ô "Always match my default message font".',
        'Dán (Cmd+V) vào ô bên phải. Đừng lo lắng nếu ảnh không hiển thị đúng ở đây, nó sẽ hiển thị bình thường khi soạn email.',
        'Tắt cửa sổ để lưu.'
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
              <Copy size={16} /> Sao chép chữ ký
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
              key={selectedTemplateId + formData.name + formData.email}
              ref={previewRef}
              className="preview-content"
              style={{ animation: 'fadeIn 0.5s ease-out' }}
              dangerouslySetInnerHTML={{ __html: generateSignatureHtml() }}
            />
          </div>
        </div>
      </div>

      <div className="guide-section" id="guide">
        <h2>Hướng dẫn cài đặt</h2>
        
        {instructionData.length === 0 && (
           <p style={{ textAlign: 'center', margin: '20px 0', color: '#666' }}>Đang tải hướng dẫn...</p>
        )}

        <div className="client-grid">
          {(instructionData.length > 0 ? instructionData : guides.map(g => ({ client: g.title, steps: g.content }))).map((guide, idx) => (
            <div 
              className="client-card" 
              key={idx}
              onClick={() => setSelectedClientGuide(guide)}
            >
              <img 
                key={`grid-icon-${guide.client}`}
                className="client-card-icon"
                src={`${import.meta.env.BASE_URL}icons/${guide.client.toLowerCase().replace(/[^a-z0-9]/g, '_')}.png`} 
                alt="" 
                onError={(e) => { 
                  e.target.style.display = 'none'; 
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                }} 
              />
              <div key={`grid-fallback-${guide.client}`} style={{ display: 'none', color: '#666' }}>
                <Mail size={32} />
              </div>
              <span className="client-card-name">{guide.client}</span>
            </div>
          ))}
        </div>
      </div>

      {selectedClientGuide && (
        <div className="guide-modal-overlay" onClick={() => setSelectedClientGuide(null)}>
          <div className="guide-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="guide-modal-sidebar">
              <div className="sidebar-header">
                <span className="sidebar-title">Chọn ứng dụng</span>
              </div>
              <div className="sidebar-nav">
                {(instructionData.length > 0 ? instructionData : guides.map(g => ({ client: g.title, steps: g.content }))).map((guide, idx) => (
                  <div 
                    key={idx}
                    className={`sidebar-nav-item ${selectedClientGuide.client === guide.client ? 'active' : ''}`}
                    onClick={() => setSelectedClientGuide(guide)}
                  >
                    <img 
                      key={`sidebar-icon-${guide.client}`}
                      src={`${import.meta.env.BASE_URL}icons/${guide.client.toLowerCase().replace(/[^a-z0-9]/g, '_')}.png`} 
                      alt="" 
                      width={20} height={20} 
                      style={{ objectFit: 'contain' }}
                      onError={(e) => { e.target.style.display = 'none'; }} 
                    />
                    <span>{guide.client}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="guide-modal-content">
              <button className="modal-close" onClick={() => setSelectedClientGuide(null)}>
                <X size={24} />
              </button>
              
              <h3 className="guide-title">
                <img 
                  key={`modal-icon-${selectedClientGuide.client}`}
                  src={`${import.meta.env.BASE_URL}icons/${selectedClientGuide.client.toLowerCase().replace(/[^a-z0-9]/g, '_')}.png`} 
                  alt="" 
                  width={32} height={32} 
                  style={{ objectFit: 'contain' }}
                  onError={(e) => { e.target.style.display = 'none'; }} 
                />
                Cài đặt cho {selectedClientGuide.client}
              </h3>
              
              {selectedClientGuide.notes && (
                <div style={{
                  padding: '12px 16px',
                  backgroundColor: '#FFF3CD',
                  color: '#856404',
                  borderLeft: '4px solid #FFEBA8',
                  borderRadius: '4px',
                  marginBottom: '24px',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  fontWeight: '500'
                }}>
                  {selectedClientGuide.notes}
                </div>
              )}

              <div className="step-list">
                {selectedClientGuide.steps && selectedClientGuide.steps.map((step, sIdx) => (
                  <div key={sIdx} style={{ marginBottom: '24px' }}>
                    <div className="step-item" style={{ marginBottom: '12px' }}>
                      <div className="step-indicator">{sIdx + 1}</div>
                      <div className="step-text">{step}</div>
                    </div>
                    {/* Render corresponding image right after the step */}
                    {selectedClientGuide.screenshotUrls && selectedClientGuide.screenshotUrls[sIdx] && (
                      <div className="step-image-container" style={{ marginLeft: '40px', marginTop: '12px' }}>
                        <img 
                          src={import.meta.env.BASE_URL + selectedClientGuide.screenshotUrls[sIdx].replace(/^\//, '')} 
                          alt={`${selectedClientGuide.client} screenshot ${sIdx + 1}`} 
                          className="step-image"
                        />
                      </div>
                    )}
                  </div>
                ))}

                {/* Render any leftover images if there are more screenshots than steps */}
                {selectedClientGuide.screenshotUrls && selectedClientGuide.screenshotUrls.length > selectedClientGuide.steps.length && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginLeft: '40px', marginTop: '16px' }}>
                    {selectedClientGuide.screenshotUrls.slice(selectedClientGuide.steps.length).map((url, iIdx) => (
                      <div className="step-image-container" key={iIdx}>
                        <img 
                          src={import.meta.env.BASE_URL + url.replace(/^\//, '')} 
                          alt={`${selectedClientGuide.client} screenshot extra ${iIdx + 1}`} 
                          className="step-image"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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
