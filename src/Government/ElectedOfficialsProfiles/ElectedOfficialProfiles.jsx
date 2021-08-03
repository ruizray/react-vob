import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import { Row, CardImg, Card, CardBody, ListGroup, ListGroupItem, Col } from "reactstrap";
import sanityClient from "./../../client";
const ElectedOfficialsProfile = (props) => {
	const [postData, setPostData] = useState(null);

	const { id } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "employee" && id.current == $id]{
          firstName,
          lastName,
		  id,
		  title,
		  email,
		  phone,
		  imageUrl,
          "biographies":biographies[]
       }`,
				{ id }
			)
			.then((data) => {
				console.log("DATA from sanity", data);
				setPostData(data[0]);
			})
			.catch(console.error);
	}, [id]);

	const serializers = {
		types: {
			codeBlock: (props) => {
				console.log("%c CodeBlock", "color:yellow", props);
				return <div dangerouslySetInnerHTML={{ __html: props.node.code }}></div>;
			},
			block: (props) => {
				console.log("%c Block", "color:green", props.node);
				if (props.node.markDefs.length > 0 && props.node.markDefs[0].subheader === true) {
					return <p className='lead mb-1 text-muted'>{props.children}</p>;
				} else {
					return <p>{props.children}</p>;
				}
			},
			paragraph: (props) => {
				console.log(props);
				return <> </>;
			},
		},
		container: (test) => {
			console.log("CONTAINER", test);
			return <>{test.children}</>;
		},
		marks: {
			strong: (props) => {
				console.log("%c Strong mark found", "color:red", props);
				return <strong style={{ fontWeight: "bold" }}>{props.children}</strong>;
			},
			iconWithText: (props) => {
				console.log("%c Strong found", "color:yellow", props);
				return (
					<>
						<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
							{props.mark.icon}
						</i>
						{props.mark.text}
					</>
				);
			},
		},
	};

	if (!postData)
		return (
			<Row className='gx-3'>
				<Col md={3}> </Col>
				<Col id='fadeInTop' md={6}>
					<div
						style={{ width: "6rem", height: "6rem", marginRight: "auto", marginLeft: "auto", display: "block" }}
						className='spinner-border'
						role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				</Col>
				<Col md={3} id='fadeInRight'></Col>
			</Row>
		);

	return (
		<>
			<Row className='gutters-sm'>
				<div className='col-md-3 mb-3 text-truncate '>
					<Card className='border'>
						<CardBody>
							<div className='d-flex flex-column align-items-center text-center'>
								{postData.imageUrl && <CardImg src={postData.imageUrl}></CardImg>}

								<div className='mt-2 text-truncate w-100'>
									{postData.firstName && postData.lastName && (
										<h4 className='text-truncate'>{`${postData.firstName} ${postData.lastName}`}</h4>
									)}
									{postData.title && <h4 className='text-muted'>{postData.title}</h4>}
								</div>
							</div>
						</CardBody>
					</Card>
					<Card className='mt-3 border '>
						<ListGroup flush={true}>
							{postData.phone && (
								<ListGroupItem className='d-flex justify-content-between align-items-center flex-wrap'>
									<h6 className='mb-0'>Office</h6>
									<span className='text-primary'>{postData.phone}</span>
								</ListGroupItem>
							)}
							{postData.cell && (
								<ListGroupItem className='d-flex justify-content-between align-items-center flex-wrap'>
									<h6 className='mb-0'>Cell</h6>
									<span className='text-primary'>{postData.cell}</span>
								</ListGroupItem>
							)}
							{postData.email && (
								<ListGroupItem className='d-flex justify-content-between align-items-center flex-wrap'>
									<h6 className='mb-0 '>Email</h6>
									<span className='text-primary text-truncate'>{postData.email}</span>
								</ListGroupItem>
							)}
						</ListGroup>
					</Card>
				</div>
				<Col>
					{postData.biographies &&
						postData.biographies.map((biography) => {
							console.log(biography);
							return (
								<Card key={biography._key}  className='border card-raised ripple-primary mb-3'>
									<CardBody className='flex-column d-flex p-4'>
										{biography.headerIcon && <i className='material-icons icon-lg '>{biography.headerIcon}</i>}
										{biography.header && <h2 className='display-6'>{biography.header}</h2>}
										<BlockContent blocks={biography.blockContent} serializers={serializers} />
									</CardBody>
								</Card>
							);
						})}
				</Col>
			</Row>
		</>
	);
};

export { ElectedOfficialsProfile };
