// App Component
import GeneralInfoSection from './components/GeneralInfoSection'
import SectionTitle from './components/SectionTitle'
import EducationToggle from './components/EducationToggle'
import PracticalToggle from './components/PracticalToggle'
import CvPreview from './components/CvPreview'
import html2pdf from 'html2pdf.js'
import ObjectiveSection from './components/ObjectiveSection'
import { useState } from 'react'
import { BiPlusCircle } from 'react-icons/bi'
import {
	FaGraduationCap,
	FaBriefcase,
	FaBullseye,
	FaUserTie,
} from 'react-icons/fa6'

const App = () => {
	// Education Toggles
	const [educationToggles, setEducationToggles] = useState([
		{
			id: 1,
			info: {
				schoolName: "Bachelor's in Computer Science",
				studyTitle: 'University of Technology | Expected Graduation',
				dateOfStudy: new Date(),
			},
		},
	])

	const addEducationToggle = () => {
		setEducationToggles((prev) => [
			...prev,
			{
				id: prev.length + 1 + Date.now(),
				info: {
					schoolName: "Bachelor's in Computer Science",
					studyTitle: 'University of Technology | Expected Graduation',
					dateOfStudy: null,
				},
			},
		])
	}

	const handleEducationChange = (id, updatedInfo) => {
		setEducationToggles((prev) =>
			prev.map((toggle) =>
				toggle.id === id ? { ...toggle, info: updatedInfo } : toggle
			)
		)
	}

	const handleDownload = () => {
		const element = document.getElementById('cv-preview')
		const opt = {
			margin: [20, 15], // [top/bottom, left/right]
			filename: 'cv.pdf',
			image: { type: 'jpeg', quality: 1 },
			html2canvas: {
				scale: 3, // Augmente la résolution
				useCORS: true,
				logging: true,
				dpi: 300,
				letterRendering: true,
			},
			jsPDF: {
				unit: 'mm',
				format: 'a4',
				orientation: 'portrait',
			},
		}

		// Crée un conteneur temporaire pour contrôler les marges
		const container = document.createElement('div')
		container.style.padding = '40px 30px' // Marges internes
		container.appendChild(element.cloneNode(true))

		html2pdf().set(opt).from(container).save()
	}

	const deleteEducationToggle = (id) => {
		setEducationToggles((prev) => prev.filter((toggle) => toggle.id !== id))
	}

	// Practical toggles
	const [practicalToggles, setPracticalToggles] = useState([
		{
			id: 1,
			info: {
				// Change 'practicalInfo' to 'info'
				practicalTitle: 'Junior Web Developer',
				company: 'Tech Solutions Inc., Remote',
				location: 'Zambia, Lusaka',
				startDate: new Date(),
				endDate: new Date(),
			},
		},
	])

	const addPracticalToggle = () => {
		setPracticalToggles((prev) => [
			...prev,
			{
				id: prev.length + 1 + Date.now(),
				info: {
					practicalTitle: 'Junior UX Designer',
					company: 'Elikya Tech',
					location: 'Mali, Bamako',
					startDate: null,
					endDate: null,
				},
			},
		])
	}

	const handlePracticalChange = (id, updatedInfo) => {
		setPracticalToggles((prev) =>
			prev.map((toggle) =>
				toggle.id === id ? { ...toggle, info: updatedInfo } : toggle
			)
		)
	}

	const deletePracticalToggle = (id) => {
		setPracticalToggles((prev) => prev.filter((toggle) => toggle.id !== id))
	}

	// General Infos
	const [generalInfo, setGeneralInfo] = useState({
		name: 'YakeDev Kay',
		profession: 'Web Developer / UX Designer',
		email: 'erickay@gmail.com',
		phone: '+248 812 345 678',
	})

	const handleInputChange = ({ target: { name, value } }) => {
		setGeneralInfo((prevInfo) => ({
			...prevInfo,
			[name]: value,
		}))
	}

	const [objectiveText, setObjectiveText] = useState({
		objective:
			'Enthusiastic web developer and UX designer with a passion for crafting seamless, user-centered digital experiences. Seeking opportunities to leverage my skills in front-end development and design to contribute to impactful projects.',
	})

	const handleObjectiveChange = ({ target: { value } }) => {
		setObjectiveText({ objective: value })
	}

	return (
		<div className='ek-container grid grid-cols-12 gap-4 p-6 md:h-screen overflow-scroll bg-slate-200 mx-auto'>
			<div className='ek-sidebar h-full overflow-scroll border col-span-12 w-4/5 md:col-span-5 p-8 bg-white shadow-lg shadow-slate-200 rounded-xl mx-auto'>
				<div className='ek-section mb-6 '>
					<SectionTitle title='General Information' icon={FaUserTie} />
					<form action='' className='max-w-sm mx-auto'>
						<GeneralInfoSection
							generalInfo={generalInfo}
							onChange={handleInputChange}
						/>
					</form>
				</div>

				<div className='ek-section mb-8 '>
					<SectionTitle title='Educational Experience' icon={FaGraduationCap} />
					<div className='ek-education-toggle-container'>
						{educationToggles.map((toggle) => (
							<EducationToggle
								key={toggle.id}
								id={toggle.id}
								educationInfo={toggle.info}
								onChange={handleEducationChange}
								onDelete={deleteEducationToggle}
								title='Educational Experience'
							/>
						))}
					</div>
					<button
						type='button'
						onClick={addEducationToggle}
						className='flex items-center justify-center text-2xl border-dashed border-2 border-blue-700 hover:bg-blue-50  text-blue-700 px-12 py-3 rounded-xl  w-full transition-colors ease-in-out '>
						<BiPlusCircle /> <span className='text-base ms-2'>Add another</span>
					</button>
				</div>

				<div className='ek-section mb-8 '>
					<SectionTitle title='Practical Experience' icon={FaBriefcase} />
					<div className='ek-practical-toggle-container'>
						{practicalToggles.map((toggle) => (
							<PracticalToggle
								key={toggle.id}
								id={toggle.id}
								practicalInfo={toggle.info} // Correctly pass the practical info
								onDelete={deletePracticalToggle}
								onChange={handlePracticalChange}
								title='Practical Experience'
							/>
						))}
					</div>
					<button
						type='button'
						onClick={addPracticalToggle}
						className='flex items-center justify-center text-2xl border-dashed border-2 border-blue-700 hover:bg-blue-50  text-blue-700 px-12 py-3 rounded-xl  w-full transition-colors ease-in-out '>
						<BiPlusCircle /> <span className='text-base ms-2'>Add another</span>
					</button>
				</div>

				<div className='ek-section mb-8 '>
					<SectionTitle title='Objective' icon={FaBullseye} />
					<ObjectiveSection
						objectiveText={objectiveText}
						onChange={handleObjectiveChange}
					/>
				</div>
				<div className='ek-section mb-8 '>
					<button
						onClick={handleDownload}
						className='ek-download-cv-btn w-full py-3 bg-blue-700 text-white rounded-lg'>
						Download CV
					</button>
				</div>
			</div>
			<div className='ek-main col-span-12 md:col-span-7 border mx-auto overflow-scroll w-4/5 md:w-4/5 bg-white shadow-lg shadow-slate-200 rounded-xl'>
				<div className='ek-cv-preview' id='cv-preview'>
					<CvPreview
						generalInfo={generalInfo}
						objectiveText={objectiveText}
						educationInfos={educationToggles.map((toggle) => toggle.info)}
						practicalInfos={practicalToggles.map((toggle) => toggle.info)} // Pass correct practical info
					/>
				</div>
			</div>
		</div>
	)
}

export default App
