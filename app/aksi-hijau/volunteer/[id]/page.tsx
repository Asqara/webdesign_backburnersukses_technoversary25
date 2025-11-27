"use client";
import { use } from "react";
import Volunteer from "@/data/dummyVolunteer";
import { notFound } from "next/navigation";
import MainContainer from "@/components/ui/MainContainer";
import Image from "next/image";
import ButtonNavigation from "@/components/ui/ButtonNavigation";
import VolunteerHero from "@/components/partials/VolunteerHero";
import VolunteerDetails from "@/components/partials/VolunteerDetails";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const data = Volunteer.find((item) => item.id === id);
  if (!data) {
    notFound(); // 🔴 otomatis render halaman 404
  }

  return (
    <MainContainer>
      <VolunteerHero data={data} />
      <VolunteerDetails data={data} />
    </MainContainer>
  );
}
