import { permanentRedirect } from 'next/navigation';

export default function ConsultationSuccessRedirectPage() {
  permanentRedirect('/consultation');
}