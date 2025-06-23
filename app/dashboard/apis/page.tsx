import { Card } from "@/app/ui/dashboard/cards";
import { GoogleMaps } from "@/app/ui/Iframe/googleMaps";
import { VentanaDeColor } from "@/app/ui/Iframe/ventanaDeColor";
import { Youtube } from "@/app/ui/Iframe/youtube";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  return (
    <div className="">
      <p>APIs</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={"hola"} type="collected" />
        <Card title="Pending" value={"que"} type="pending" />
        <Card title="Total Invoices" value={"hace"} type="invoices" />
        <Card
          title="Total Customers"
          value={"moli"}
          type="customers"
        />
      </div>
    </div>
  );
}

