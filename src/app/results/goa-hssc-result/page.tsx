import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GoaHSSCResult() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center bg-[#FFFBD9] mt-12 w-10/14 max-w-7xl mx-auto px-4">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 my-8">
          <h1 className="text-2xl font-bold text-center text-red-600 mb-6">
            Goa HSSC Result 2025 Class 12
          </h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Important Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded">
              <div>
                <p className="font-semibold">Board:</p>
                <p>Goa Board of Secondary and Higher Secondary Education</p>
              </div>
              <div>
                <p className="font-semibold">Exam Name:</p>
                <p>HSSC Class 12 Examination</p>
              </div>
              <div>
                <p className="font-semibold">Result Status:</p>
                <p className="text-green-600 font-semibold">Available</p>
                <a href="https://results.gbshsegoa.net/#/home"><p className="text-blue-500" >Click Here</p></a>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">How to Check Result</h2>
            <ol className="list-decimal list-inside space-y-2 bg-gray-50 p-4 rounded">
              <li>Visit the official Goa Board website</li>
              <li>Click on the &quot;HSSC Result 2025&quot; link</li>
              <li>Enter your Roll Number</li>
              <li>Enter your Date of Birth</li>
              <li>Enter the Captcha code shown</li>
              <li>Click on the Submit button</li>
              <li>Your result will be displayed on the screen</li>
              <li>Download and save the result for future reference</li>
            </ol>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Important Dates</h2>
            <div className="bg-gray-50 p-4 rounded">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">Result Declaration Date</td>
                    <td className="py-2">May 25, 2025</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">Supplementary Exam Date</td>
                    <td className="py-2">To be announced</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-yellow-700">
              <span className="font-bold">Note:</span> Candidates are advised to keep checking the official website regularly for updates regarding supplementary exams and other notifications.
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://gbshse.gov.in"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Result PDF
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}