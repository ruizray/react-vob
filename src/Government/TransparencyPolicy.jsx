import React from "react";
import { Row, Col } from "reactstrap";
import { ContentCard, ContentCardSubsection } from "../components/ContentCard";
import ScrollSpy from "./../components/ScrollSpy";

const TransparencyPolicy = () => {
	return (
		<>
			<Row className='gx-3'>
				<Col md={3}>
					<ScrollSpy />
				</Col>
				<Col id='fadeInTop' md={6}>
					<ContentCard icon='front_hand' id='Information' header='Information'>
						<p>
							This policy provides guidance on how the Village of Bolingbrook ensures municipal matters are approached in an accountable
							and transparent matter, with emphasis on openness, ethics, and fiscal responsibility. The following information has been
							added, as well as a status of when the remainder of the items will be ready for publication. Thank you for you patience as we
							prepare the information for the website.
						</p>
						<p>
							Please note: When searching a PDF file, choosing the "ctrl (control) and f" keys will allow you to "find" specific items by
							searching the document. Simply type the word or phrase you are searching for in the pop-up box that appears after hitting
							"ctrl (control) and f" keys.
						</p>

						<ContentCardSubsection
							id='ElectedOfficials'
							subHeader='Elected Officials, Administrators (Department Directors) & Senior Administrator'>
							<p>
								The Village website shall include contact information, including name, phone number, and an electronic contact method
								for all elected officials and the Department Head for each department. Elected Officials, Department Directors & Senior
								Administrator
							</p>
						</ContentCardSubsection>
						<ContentCardSubsection id='MeetingInformation' subHeader='Meeting Information'>
							<p>
								The Village website shall include notices and agendas, as available, for all future public meetings of the Village
								Board, along with board packets and minutes. This information shall remain available on the Village’s website for five
								years. The Village Yearly Public Meeting Calendar shall include the tentative dates of all Village Board meetings at
								least one year into the future. Meeting dates may be changed, and meetings may be canceled, subject to the requirements
								of the Open Meetings Act.
							</p>
						</ContentCardSubsection>
						<ContentCardSubsection id='PublicRecords' subHeader='Public Records - FOIA (Freedom of Information Act)'>
							<p>
								The Village website shall include the name, address, phone number, and an electronic contact method (email) for the
								Village Freedom of Information Act (FOIA) Officer, along with the address, phone number, and submission method for FOIA
								requests. The Village website shall also include the FOIA process response time and any fees charged by the Village in
								connection with FOIA requests and responses. FOIA Information and Guidelines.
							</p>
						</ContentCardSubsection>
						<ContentCardSubsection id='FinancialAudits' subHeader='Financial Audits'>
							<p>
								The Village website shall include the Village’s Annual Financial Audits for the past 5 years and shall remain available.
							</p>
						</ContentCardSubsection>
						<ContentCardSubsection id='Expenditures' subHeader='Expenditures'>
							<p>
								The Village website shall include the Village’s checkbook register and credit card Expenditures/Bill Listings to all
								individuals and third-party vendors – including name of payee, description of expenditure, and amount of expenditure –
								for the past 5 years. Annual Treasurer's Reports
							</p>
						</ContentCardSubsection>
						<ContentCardSubsection id='Salary' subHeader='Salary & Benefit Compensation'>
							<p>
								The Village website shall contain the total Salary & Benefit Compensation, including but not limited to, health
								insurance, life insurance, and pension. This information shall be updated at the end of each calendar year and shall
								remain available on the Village’s website for five years. The Village shall also provide all salary and benefit (Total
								Compensation Packages) information in accordance with Public Act 97-0609 and as required by State Statute. (The Village
								is currently updating this information).
							</p>
						</ContentCardSubsection>
						<ContentCardSubsection id='Contracts' subHeader='Contracts'>
							<p className='lead mb-1 text-muted'>(Open Bids, Request For Proposals, Approved Vendor Contracts and Union Contracts)</p>
							<p>
								The Village website shall include the following: open bids & proposals for all contracts for over $25,000, along with
								where and how to submit a bid or proposal; all approved vendor contracts for over $25,000 along with bids for those
								contracts, if applicable, and union contracts. Proprietary proposals will not be placed on the website. This information
								shall remain available on the Village’s website for five years.
							</p>
							<ul>
								<li>Purchase Orders ( The Village uses Purchase Orders instead of Contracts)</li>
								<li>Bid Documents,</li>
								<li>Instruction & Open Bids</li>
								<li>Union Contracts</li>
							</ul>
						</ContentCardSubsection>
						<ContentCardSubsection id='Lobbying' subHeader='Lobbying'>
							<p>
								The Village website shall include the names of any lobbying associations that the Village helps or previously helped to
								fund in the past 5 years, whether through association or membership dues or otherwise, and any contracts with any
								lobbying firms in the past 5 years. (The Village is currently updating this information)
							</p>
							<ul>
								<li>Lobbying Firm Contracts / Associations & Memberships</li>
							</ul>
						</ContentCardSubsection>
						<ContentCardSubsection id='Taxes' subHeader='Taxes and Fees'>
							The Village website shall include the following: a central page showing the tax rate for all major Village revenue sources –
							property, income, sales, etc.; a detailed listing of all Village revenue sources; and, a fee schedule showing all Village
							fees on residents and business.
						</ContentCardSubsection>
					</ContentCard>
				</Col>
				<Col md={3} id='fadeInRight'></Col>
			</Row>
		</>
	);
};

export default TransparencyPolicy;
