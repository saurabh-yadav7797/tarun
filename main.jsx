import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoanDetail from './LoanDetail.jsx'
import LeaseAgreementViewer from './LeaseAgreementViewer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <LoanDetail />
    <LeaseAgreementViewer />
  </StrictMode>,
)
