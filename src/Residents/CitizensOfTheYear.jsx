import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { ContentCard, ContentCardImage, ContentCardSubsection } from "../components/ContentCard";
import ScrollSpy from "./../components/ScrollSpy";
const CitizensOfTheYear = (props) => {
	return (
		<>
			<Row className='gx-3'>
				<Col md={3}>
					<ScrollSpy></ScrollSpy>
				</Col>
				<Col id='fadeInTop' md={6}>
					<ContentCard id='Citizens' icon='front_hand' header='2020 Citizens of the year'>
						<ContentCardSubsection id='Family' subHeader='Family of the Year'>
							<p className='lead mb-1 text-muted'>Robyn and Todd McBroom</p>
							<ContentCardImage
								src='https://bolingbrookil.govoffice3.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Robyn_and_Todd_McBroom_2020.PNG'
								caption='Robyn and Tood McBroom'></ContentCardImage>
							<p>
								Robyn and Todd McBroom have lived in Bolingbrook for 20 years. They chose to go into the corporate world after earning
								their degrees from Illinois State University. Robyn has a Bachelor of Arts degree in Education and Todd has a Bachelor
								of Science degree in Marketing.
							</p>
							<p>
								They have an interesting history in their professional careers. In 2003, they both lost their jobs in what they thought
								were their long time corporate careers. Instead of trying to continue working for others, they took the initiative to
								research options to opening their own business. Thus, McBroom’s Cleaning Service was launched and as part of their 30
								second elevator speech they say yes their last name really is McBroom.
							</p>
							<p>
								In later years, Liz was able to reconnect to her education roots. Beginning as a substitute teacher for Valley View
								School District 365-U and then Liz began a VVSD School Board Member in 1997. Serving as a 20-plus year member of the
								School Board, she has been given the honor of a Master Board Member by the Illinois State Board of Education multiple
								times. In her role as a Parent/Child Educator for the Early HeadStart Program, Liz works with low income eligible
								families and educates parents on with a Home Based curriculum for children six (6) weeks to three (3) years of age. In
								2017, she was named Catholic Charities Diocese of Joliet “Employee of the Year.”
							</p>
							<ContentCardImage
								src='https://bolingbrookil.govoffice3.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Robyn_and_Todd_McBroom_Couple_picture_2020.PNG'
								caption='Robyn and Tood McBroom'
								imageStyle='responsive-image'></ContentCardImage>
							<p>
								Her service as an extremely active member of Alpha Missionary Baptist Church in Bolingbrook over the last 35 years, Liz
								has participated in many local volunteer and foreign mission opportunities. She has volunteered at Hesed House,
								Meadowbrook Manor, La Chateau and many other local nursing homes. Her work with the homeless has led her to Daybreak
								Shelter, Pacific Garden Mission, and repeat supply deliveries to Lower Wacker Drive in Chicago. Mission work has taken
								her from St. Louis, New Orleans, and the Navajo Nation to international locations including Jamaica, Jerusalem,
								Guatemala, Mexico, the Dominican Republic, and various countries in Africa.
							</p>
							<p>
								In addition to church related service, Liz has also worked with other Bolingbrook community leaders and Chicagoland
								initiatives. She was a part of the DuPage Township Committee on Youth and Bolingbrook working Academic Group. She worked
								alongside longtime resident and community leader Joanne Robinson as a Prison Chaplain. Her heart for those in prison has
								taken her to visit incarcerated Bolingbrook residents in Cook County Jail, Statesville Prison, other Illinois prisons,
								and as far as Federal Prisons in New York, Minnesota, and Georgia. Liz’s focus on service and community even led her to
								run for Mayor of Bolingbrook in 1997.
							</p>
							<p>
								Her service to the community exemplifies her two mottos “Service to all” and “No one cares how much you know until they
								know how much you care.” Every event where you see Liz, and there are many, you will always see her warm smile, receive
								an enthusiastic greeting, and marvel at her extensive hat/head wrap collection. Her service to others and unique
								approach to life serve as a great model to everyone in the Bolingbrook Community.
							</p>
						</ContentCardSubsection>
						<ContentCardSubsection id='Female' subHeader='Female Citizen of the Year'>
							<p className='lead mb-1 text-muted'>Elizabeth “Liz” Campbell</p>
							<ContentCardImage
								src='https://bolingbrookil.govoffice3.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Liz_Campbell_2020.PNG'
								caption='Elizabeth “Liz” Campbell'></ContentCardImage>
							<p>
								Elizabeth “Liz” Campbell has been a Bolingbrook resident for 37 years. Liz has been married to her husband, Ronald for
								35 years. Liz and Ron are proud parents, foster/adopted parents, grandparents, and recently became great-grandparents.
								She has served the community in various capacities during her time in Bolingbrook.
							</p>
							<p>
								Liz started working at the age of 10, when her sixth grade teacher paid her $25 to grade papers. A year later, she was a
								teacher’s assistant in a HeadStart classroom. By the time she was 16 and attending high school, Liz was working for
								Sears, Roebuck, and Company, where she met former Deputy Mayor Leroy Brown; one of Liz’s heroes. After high school, Liz
								obtained her Bachelor of Arts degree from Roosevelt University and worked as accounting supervisor.
							</p>
							<p>
								In later years, Liz was able to reconnect to her education roots. Beginning as a substitute teacher for Valley View
								School District 365-U and then Liz began a VVSD School Board Member in 1997. Serving as a 20-plus year member of the
								School Board, she has been given the honor of a Master Board Member by the Illinois State Board of Education multiple
								times. In her role as a Parent/Child Educator for the Early HeadStart Program, Liz works with low income eligible
								families and educates parents on with a Home Based curriculum for children six (6) weeks to three (3) years of age. In
								2017, she was named Catholic Charities Diocese of Joliet “Employee of the Year.”
							</p>
							<ContentCardImage
								src='https://bolingbrookil.govoffice3.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Elizabeth_Campbell.PNG'
								imageStyle='responsive-image'></ContentCardImage>
							<p>
								Her service as an extremely active member of Alpha Missionary Baptist Church in Bolingbrook over the last 35 years, Liz
								has participated in many local volunteer and foreign mission opportunities. She has volunteered at Hesed House,
								Meadowbrook Manor, La Chateau and many other local nursing homes. Her work with the homeless has led her to Daybreak
								Shelter, Pacific Garden Mission, and repeat supply deliveries to Lower Wacker Drive in Chicago. Mission work has taken
								her from St. Louis, New Orleans, and the Navajo Nation to international locations including Jamaica, Jerusalem,
								Guatemala, Mexico, the Dominican Republic, and various countries in Africa.
							</p>
							<p>
								In addition to church related service, Liz has also worked with other Bolingbrook community leaders and Chicagoland
								initiatives. She was a part of the DuPage Township Committee on Youth and Bolingbrook working Academic Group. She worked
								alongside longtime resident and community leader Joanne Robinson as a Prison Chaplain. Her heart for those in prison has
								taken her to visit incarcerated Bolingbrook residents in Cook County Jail, Statesville Prison, other Illinois prisons,
								and as far as Federal Prisons in New York, Minnesota, and Georgia. Liz’s focus on service and community even led her to
								run for Mayor of Bolingbrook in 1997.
							</p>
							<p>
								Her service to the community exemplifies her two mottos “Service to all” and “No one cares how much you know until they
								know how much you care.” Every event where you see Liz, and there are many, you will always see her warm smile, receive
								an enthusiastic greeting, and marvel at her extensive hat/head wrap collection. Her service to others and unique
								approach to life serve as a great model to everyone in the Bolingbrook Community.
							</p>
						</ContentCardSubsection>

						<ContentCardSubsection id='Male' subHeader='Male Citizen of the Year'>
							<p className='lead mb-1 text-muted'>Jesus “Chewey” Serna</p>
							<ContentCardImage
								src='https://bolingbrookil.govoffice3.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Chewey_Serna_2020.PNG'
								caption='Jesus “Chewey” Serna'></ContentCardImage>
							<p>
								Jesus, or as most people know him, Chewey is a proud and devoted single father of his beautiful 13 year old daughter
								Jenny. Chewey and Jenny moved to Bolingbrook in 2006. Chewey has studied at College of DuPage and Loyola University to
								become a youth counselor.
							</p>
							<p>
								Chewey has made it his mission to help others adjust to life in the United States. As a part of that work, he has been
								involved with two separate organizations, the Southwest Suburban Immigrant Project and Immigrant Community of the
								Midwest in Action (CIMA). He volunteers as part of both groups to bring festivals to Bolingbrook to celebrate Hispanic
								heritage including “El Grito”. These events are held behind Village Hall each year to celebrate the diversity of
								Bolingbrook.
							</p>
							<p>
								Chewey deeply appreciates the opportunities in the United States and helps others who share the same passion. In an
								effort to help his daughter Jenny understand the beauty of the United States and the importance of respect for human
								life, they participated in a “Dignity Walk”. They walked over 800 miles from Bolingbrook to Washington DC in 2018.
								Chewey is proudly working toward his path to citizenship.
							</p>
							<ContentCardImage
								src='https://bolingbrookil.govoffice3.com/vertical/Sites/%7B55EB27CA-CA9F-40A5-A0EF-1E4EEF52F39E%7D/uploads/Chewey_and_Jenny.PNG'
								imageStyle='responsive-image'></ContentCardImage>
							<p>
								In addition to working with the two organizations, he makes himself available to the Community as a volunteer for
								several organizations in Bolingbrook. He also includes his daughter in these volunteer efforts. He answers the call to
								serve others and local organizations. Both Jenny and Chewey work at local food banks to ensure that families in the
								community have food on their table. Chewey is a volunteer “for missing kids” NCMEC (since 2012), a Radio Producer and
								Television Host and a Youth Counselor. He is an advocate for the Hispanic community in Bolingbrook.
							</p>
							<p>
								In addition to church related service, Liz has also worked with other Bolingbrook community leaders and Chicagoland
								initiatives. She was a part of the DuPage Township Committee on Youth and Bolingbrook working Academic Group. She worked
								alongside longtime resident and community leader Joanne Robinson as a Prison Chaplain. Her heart for those in prison has
								taken her to visit incarcerated Bolingbrook residents in Cook County Jail, Statesville Prison, other Illinois prisons,
								and as far as Federal Prisons in New York, Minnesota, and Georgia. Liz’s focus on service and community even led her to
								run for Mayor of Bolingbrook in 1997.
							</p>
							<p>
								He supports local officials, Bolingbrook businesses, educates, assists, guides, provides history and encourages Hispanic
								residents to participate in Census 2020. His example of volunteerism exemplifies the good of Bolingbrook and encourages
								others to serve.
							</p>
						</ContentCardSubsection>
					</ContentCard>
				</Col>

				<Col md={3} id='fadeInRight'></Col>
			</Row>
		</>
	);
};

export default CitizensOfTheYear;
