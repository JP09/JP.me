import RootLayout from "./layout";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function App() {
  return (
    <RootLayout />
  );
}
