type Props = {
  title: string;
  description?: string;
  canonical?: string;
};

// Page titles and descriptions are set with the Next.js Metadata API
// in the app router. This component stays so existing pages can keep
// their call sites without rendering a second head manager.
export default function Seo(_props: Props) {
  return null;
}
