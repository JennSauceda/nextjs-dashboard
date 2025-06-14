import { GoogleMaps } from "@/app/ui/Iframe/googleMaps";
import { VentanaDeColor } from "@/app/ui/Iframe/ventanaDeColor";
import { Youtube } from "@/app/ui/Iframe/youtube";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  return (
    <div className=" bg-gray-500 text-white">
      <p>Customers Page</p>
      <Youtube title="YouTube Video" value={"t65mmOAc_R0?si=s0W-0NeFe-xL4T65"} />
      <GoogleMaps title="Google Maps" value={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59767.86113472471!2d-101.23661930021098!3d20.56798374007338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c85091a5c9245%3A0xe7056e4729b35eac!2sSalamanca%2C%20Gto.!5e0!3m2!1ses-419!2smx!4v1749870406550!5m2!1ses-419!2smx"} />
      <VentanaDeColor title="Ventana de Color" value={"https://www.desmos.com/calculator"}  estilos="rounded-xl p-2 shadow-sm text-whuite bg-purple-500 "/>
    </div>
  );
}

