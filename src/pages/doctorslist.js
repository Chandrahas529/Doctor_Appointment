import src1 from '../images/doc1.jpeg';
import src2 from '../images/doc2.png';
import src3 from '../images/doc3.png';
import src4 from '../images/doc4.jpeg';
import src5 from '../images/doc5.jpeg';
import src6 from '../images/doc6.jpeg';
import src7 from '../images/doc7.jpeg';
import src8 from '../images/doc8.jpeg';
import src9 from '../images/doc9.jpeg';
import src10 from '../images/doc10.jpeg';
import src11 from '../images/doc11.jpeg';
import src12 from '../images/doc12.jpeg';
import src13 from '../images/doc8.jpeg';
import src14 from '../images/doc6.jpeg';
import src15 from '../images/doc4.jpeg';
import src16 from '../images/doc16.jpeg';
import src17 from '../images/doc17.jpeg';
import src18 from '../images/doc19.jpeg';
import src19 from '../images/doc18.jpeg';
import src20 from '../images/doc20.jpeg';
import src21 from '../images/doc21.jpeg';
import src22 from '../images/doc22.jpeg';
import src23 from '../images/doc23.jpeg';
import src24 from '../images/doc24.jpeg';
import src25 from '../images/doc25.jpeg';
import src26 from '../images/doc1.jpeg';
const Doctorslist = [
    {id: 1, name: "Dr. Alexander Wright", experience: "10 years", speciallistof: "Neurology", qualification: "MD, FACC", about: "Specializes in interventional cardiology and has a passion for patient education.", mobile: "555-1234",src:src1},
{id: 2, name: "Dr. Bella Thompson", experience: "8 years", speciallistof: "Neurology", qualification: "MD, FAAP", about: "Dedicated pediatrician focused on child health and wellness.", mobile: "555-5678",src:src2},
{id: 3, name: "Dr. Carter Adams", experience: "15 years", speciallistof: "Neurology", qualification: "MD, FAAOS", about: "Expert in joint replacement and sports injuries.", mobile: "555-9101",src:src3},
{id: 4, name: "Dr. Delilah Harris", experience: "12 years", speciallistof: "Opthalmology", qualification: "MD, FAAD", about: "Renowned dermatologist with a focus on cosmetic procedures.", mobile: "555-1122",src:src4},
{id: 5, name: "Dr. Ethan Brooks", experience: "20 years", speciallistof: "Opthalmology", qualification: "MD, FACS", about: "Experienced general surgeon with a patient-centered approach.", mobile: "555-2233",src:src5},
{id: 6, name: "Dr. Fiona Clark", experience: "7 years", speciallistof: "Nuclear Magnetic", qualification: "MD, DFAPA", about: "Compassionate psychiatrist with expertise in anxiety and depression.", mobile: "555-3344",src:src6},
{id: 7, name: "Dr. Gabriel Lewis", experience: "9 years", speciallistof: "Nuclear Magnetic", qualification: "MD, FAAN", about: "Neurologist specializing in epilepsy and movement disorders.", mobile: "555-4455",src:src7},
{id: 8, name: "Dr. Hannah King", experience: "5 years", speciallistof: "Nuclear Magnetic", qualification: "MD, FACOG", about: "Focused on women's health, including prenatal care and childbirth.", mobile: "555-5566",src:src8},
{id: 9, name: "Dr. Isaac Hall", experience: "11 years", speciallistof: "Nuclear Magnetic", qualification: "MD, FASCO", about: "Dedicated to providing cutting-edge cancer treatment and research.", mobile: "555-6677",src:src9},
{id: 10, name: "Dr. Jenna Lee", experience: "6 years", speciallistof: "Surgical", qualification: "MD, FAAO", about: "Ophthalmologist with a focus on cataract and LASIK surgery.", mobile: "555-7788",src:src10},
{id: 11, name: "Dr. Kyle Scott", experience: "14 years", speciallistof: "Surgical", qualification: "MD, FACE", about: "Endocrinologist specializing in diabetes and thyroid disorders.", mobile: "555-8899",src:src11},
{id: 12, name: "Dr. Lily Mitchell", experience: "10 years", speciallistof: "Surgical", qualification: "MD, FACR", about: "Expert in autoimmune diseases and chronic pain management.", mobile: "555-9900",src:src12},
{id: 13, name: "Dr. Mason Turner", experience: "8 years", speciallistof: "Cardiology", qualification: "MD, FCCP", about: "Specializes in lung diseases and critical care medicine.", mobile: "555-1011",src:src13},
{id: 14, name: "Dr. Natalie Parker", experience: "12 years", speciallistof: "X-ray", qualification: "MD, FACG", about: "Gastroenterologist with a focus on digestive health and liver disease.", mobile: "555-1122",src:src14},
{id: 15, name: "Dr. Owen Young", experience: "9 years", speciallistof: "X-ray", qualification: "MD, FASN", about: "Specializes in kidney diseases and hypertension management.", mobile: "555-1233",src:src15},
{id: 16, name: "Dr. Penelope Collins", experience: "7 years", speciallistof: "X-ray", qualification: "MD, FASA", about: "Expert in perioperative care and pain management.", mobile: "555-1344",src:src16},
{id: 17, name: "Dr. Quinn Morris", experience: "6 years", speciallistof: "X-ray", qualification: "MD, FACAAI", about: "Focuses on allergic diseases and immune system disorders.", mobile: "555-1455",src:src17},
{id: 18, name: "Dr. Ryan Reed", experience: "13 years", speciallistof: "X-ray", qualification: "MD, FIDSA", about: "Specialist in infectious diseases and travel medicine.", mobile: "555-1566",src:src18},
{id: 19, name: "Dr. Sophia Price", experience: "10 years", speciallistof: "Dental", qualification: "MD, FASCO", about: "Hematologist with expertise in blood disorders and cancers.", mobile: "555-1677",src:src19},
{id: 20, name: "Dr. Tristan Ward", experience: "5 years", speciallistof: "Dental", qualification: "MD, FAAO-HNS", about: "Focuses on ear, nose, and throat conditions and surgeries.", mobile: "555-1788",src:src20},
{id: 21, name: "Dr. Uma Jenkins", experience: "7 years", speciallistof: "Dental", qualification: "MD, FCAP", about: "Pathologist with a focus on diagnostic accuracy and research.", mobile: "555-1899",src:src21},
{id: 22, name: "Dr. Victor Coleman", experience: "14 years", speciallistof: "Traumatology", qualification: "MD, FACR", about: "Radiologist specializing in imaging techniques and diagnostics.", mobile: "555-2000",src:src22},
{id: 23, name: "Dr. Willow Bailey", experience: "8 years", speciallistof: "Traumatology", qualification: "MD, FACS", about: "Expert in urinary tract and male reproductive health.", mobile: "555-2111",src:src23},
{id: 24, name: "Dr. Xavier Ross", experience: "11 years", speciallistof: "Cardiology", qualification: "MD, FACS", about: "Specializes in reconstructive and aesthetic surgery.", mobile: "555-2222",src:src24},
{id: 25, name: "Dr. Yara Morgan", experience: "10 years", speciallistof: "Cardiology", qualification: "MD, FACEP", about: "Emergency physician with a focus on trauma and critical care.", mobile: "555-2333",src:src25},
{id: 26, name: "Dr. Zane Carter", experience: "9 years", speciallistof: "Cardiology", qualification: "MD, AGSF", about: "Specializes in the health care of elderly patients.", mobile: "555-2444",src:src26}
]
export default Doctorslist;






