
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-max mx-auto py-16 border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6 border">
                   

                </div>

            </div>
        </div>



      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ernest Kamau. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;