import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function TermsPage() {
  return (
    <>
    <Navbar/>
    <Header/>
            <div className="bg-[#F9F9F9] py-10 px-6 sm:px-20">
          <nav className="text-sm text-gray-500">
            <Link href="/">
              <span className="hover:text-black">Home</span>
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Terms</span>
          </nav>
        </div>
      <main className="bg-white min-h-screen py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">
            Terms & condition
          </h1>

          <div className="space-y-6 text-gray-500 leading-relaxed mb-16">
            <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
              erat consequat auctor eu in elit. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Mauris
              in erat justo. Nullam ac urna eu felis dapibus condimentum sit
              amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin
              condimentum fermentum nunc. Etiam pharetra, erat sed fermentum
              feugiat, velit mauris egestas quam, ut aliquam massa nisl quis
              neque. Suspendisse in orci enim.
            </p>
            <p>
              Sed non mauris vitae erat consequat auctor eu in elit. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis
              dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut
              imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra,
              erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam
              massa nisl quis neque. Suspendisse in orci enim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Online store terms
              </h2>
              <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                <p>
                  Lorem Ipsum is simply dummy the printing typesettingindustry.
                  Lorem Ipsum has been the standard.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing
                  typesettingindustry. Lorem Ipsum has been the industry's
                  standard dummytext ever since the when an unknown printer took
                  a galley of typeand scrambled it to make a type specimen book.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                General conditions
              </h2>
              <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                <p>
                  Lorem Ipsum is simply dummy the printing typesettingindustry.
                  Lorem Ipsum has been the standard.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing
                  typesettingindustry. Lorem Ipsum has been the industry's
                  standard dummytext ever since the when an unknown printer took
                  a galley of typeand scrambled it to make a type specimen book.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Completeness and timeliness of information
              </h2>
              <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                <p>
                  Lorem Ipsum is simply dummy the printing typesettingindustry.
                  Lorem Ipsum has been the standard.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing
                  typesettingindustry. Lorem Ipsum has been the industry's
                  standard dummytext ever since the when an unknown printer took
                  a galley of typeand scrambled it to make a type specimen book.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Modifications to the service and prices
              </h2>
              <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                <p>
                  Lorem Ipsum is simply dummy the printing typesettingindustry.
                  Lorem Ipsum has been the standard.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing
                  typesettingindustry. Lorem Ipsum has been the industry's
                  standard dummytext ever since the when an unknown printer took
                  a galley of typeand scrambled it to make a type specimen book.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Optional tools
              </h2>
              <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                <p>
                  Lorem Ipsum is simply dummy the printing typesettingindustry.
                  Lorem Ipsum has been the standard.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing
                  typesettingindustry. Lorem Ipsum has been the industry's
                  standard dummytext ever since the when an unknown printer took
                  a galley of typeand scrambled it to make a type specimen book.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Third-party links
              </h2>
              <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                <p>
                  Lorem Ipsum is simply dummy the printing typesettingindustry.
                  Lorem Ipsum has been the standard.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing
                  typesettingindustry. Lorem Ipsum has been the industry's
                  standard dummytext ever since the when an unknown printer took
                  a galley of typeand scrambled it to make a type specimen book.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
