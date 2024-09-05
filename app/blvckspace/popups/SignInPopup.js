import React, {useState} from 'react';
import './Popup.css';

const SignInPopup = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState('signin');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <div className="popup-container">
      <div className="popup black">
      <div className="nav-tabs">
          <div>
            <h2 className={`nav-tab ${activeTab === 'signin' ? 'active' : ''}`} onClick={() => handleTabChange('signin')}>Sign In</h2>
          </div>
          <div>
            <h2 className={`nav-tab ${activeTab === 'subscribe' ? 'active' : ''}`} onClick={() => handleTabChange('subscribe')}>Subscribe</h2>
          </div>
          
        </div>
       
        {activeTab === 'signin' && (
            <>
                        <p>
                        Enter your credentials to acces to your account
                          </p>
          <div>
            <div className="search-input">
                <form>
                    <div className='frmGrp'>
                        <input type="email" placeholder="Email or phone number" />
                    </div>
                    <div className='frmGrp'>
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className='frmGrp'>
                        <button type='submit' className='submit'>[ enter ]</button>
                    </div>
                </form>
            </div>
          </div>
          </>
        )}

        {activeTab === 'subscribe' && (
              <>
              <p>
              Enter your credentials to acces to your account
                </p>
          <div>
           <div className='packages'>
                <div className='package'>
                    <span>Free</span>
                    <span>0<sub>£</sub></span>
                    <span>
                        <ul>
                            <li>monthly newsletter</li>
                            <li>foresight reports</li>
                            <li>one BLVCKBOOK edition for free</li>
                        </ul>
                    </span>
                </div>

                <div className='package'>
                    <span>Monthly</span>
                    <span>0<sub>£</sub></span>
                    <span>
                        <ul>
                            <li>monthly newsletter</li>
                            <li>foresight reports</li>
                            <li>all BLVCKBOOK</li>
                        </ul>
                    </span>
                </div>

                <div className='package'>
                    <span>Annually</span>
                    <span>0<sub>£</sub></span>
                    <span>
                        <ul>
                            <li>monthly newsletter</li>
                            <li>foresight reports</li>
                            <li>all BLVCKBOOK + archives</li>
                            <li>Including one invitation to [ what’s after next ] conference</li>
                        </ul>
                    </span>
                </div>
                </div>
          </div>
</>
        )}


        <button onClick={onClose} className='close'>✖</button>
      </div>
    </div>
  );
};

export default SignInPopup;
