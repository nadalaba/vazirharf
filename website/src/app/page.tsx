import {redirect} from 'next/navigation';
import { defaultLang } from '@/i18n/settings';

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect(`/${defaultLang}`);
}
