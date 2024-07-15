import { Columns } from "@/components/table/Columns";
import { DataTable } from "@/components/table/DataTable";
import StatCard from "@/components/ui/StatCard";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Admin = async () => {
  const appointmests = await getRecentAppointmentList();
  return (
    <div className="mx-auto flex max-w7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            alt="logo"
            src="/assets/images/logo-file.png"
            className="h-14 w-fit"
            height={1000}
            width={1000}
            // className="h-8 w-fit"
          />
        </Link>
        <p className="text-16-semibold">Admin Dashboard</p>
      </header>
      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments{" "}
          </p>
        </section>
        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointmests.scheduledCount}
            label="Scheduled appointments"
            icon="/assets/icons/appointments.svg"
          />
          <StatCard
            type="pending"
            count={appointmests.pending}
            label="Pending appointments"
            icon="/assets/icons/pending.svg"
          />
          <StatCard
            type="cancelled"
            count={appointmests.cancelled}
            label="Cancelled appointments"
            icon="/assets/icons/cancelled.svg"
          />
        </section>
        <DataTable columns={Columns} data={appointmests.documents} />
      </main>
    </div>
  );
};

export default Admin;
