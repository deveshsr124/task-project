import React from 'react';
import MainNavbar from './NavComponent/MainNavbar';
import SecondNavbar from './NavComponent/SecondNavbar';
import SearchBar from './SearchComponent/SearchBar';
import University from './university.jpg';
import './style.css';
const SearchPage = () => {
	const details = [
		{
			university: 'Harvard University',
			location: 'Cambridge, Massacheussets',
			fees: 'Course Fees: 9999$ - 20,000$',
			date: 'Sept - Nov 2021',
			rating: 'IELTS: 7.5',
			button: 'Add to favourites',
		},
		{
			university: 'Harvard University',
			location: 'Cambridge, Massacheussets',
			fees: 'Course Fees: 9999$ - 20,000$',
			date: 'Sept - Nov 2021',
			rating: 'IELTS: 7.5',
			button: 'Add to favourites',
		},
		{
			university: 'Harvard University',
			location: 'Cambridge, Massacheussets',
			fees: 'Course Fees: 9999$ - 20,000$',
			date: 'Sept - Nov 2021',
			rating: 'IELTS: 7.5',
			button: 'Add to favourites',
		},
	];
	return (
		<div className="search-bar">
			<MainNavbar />
			<SecondNavbar
				firstItem="Search For University"
				SecondItem="Counselor"
				ThirdItem="Schedulor"
				FourthItem="Packages and Services"
				route="/search#"
			/>
			<div className="leftContent">
				<p className="header-left">Filter your results</p>
				<p className="leftSelect">
					Destination or Country <i class="fas fa-chevron-down"></i>
				</p>

				<div className="ui search search-box2 ">
					<div className="ui left input">
						<input
							className="prompt"
							type="text"
							placeholder="Search for Country"
						/>
					</div>
				</div>
				<p className="countries">United States</p>
				<p className="countries">Australia</p>
				<p className="countries">Germany</p>
				<p className="leftSelect1">
					Course <i class="fas fa-chevron-up"></i>
				</p>
				<p className="leftSelect2">
					Level of education <i class="fas fa-chevron-up"></i>
				</p>
				<p className="leftSelect3">
					Institution type <i class="fas fa-chevron-up"></i>
				</p>
				<p className="leftSelect4">
					Cost of Living <i class="fas fa-chevron-up"></i>
				</p>
				<p className="leftSelect5">
					Ranking <i class="fas fa-chevron-up"></i>
				</p>
			</div>

			<div
				class="uk-divider-vertical"
				style={{
					height: '1356px',
					marginLeft: '250px',
					marginTop: '-550px',
				}}
			></div>
			<SearchBar boxCont="search-box1" />

			<div className="ui compact menu sort-drop">
				<div className="ui simple dropdown item">
					Sort by : Relevance
					<i className="dropdown icon"></i>
					<div className="menu">
						<div className="item">Choice 1</div>
						<div className="item">Choice 2</div>
						<div className="item">Choice 3</div>
					</div>
				</div>
			</div>
			<p className="category">Colleges</p>
			{details.map((data) => {
				return (
					<div className="search-card">
						<span className="inside-data">
							<img
								src={University}
								alt="university"
								style={{
									width: '209px',
									height: '164px',
									borderRadius: '20px 0px 0px 20px',
								}}
							/>
							<span className="university-name"> {data.university} </span>
							<span className="fav-card">
								<i class="far fa-star"></i>Add to Favourites
							</span>
							<span className="location-name">
								<i class="fas fa-map-marker-alt"></i>
								{data.location}
							</span>
							<span className="course-fees">
								{data.fees}
								<span className="date-details">{data.date}</span>
							</span>
							<span className="university-rating">{data.rating}</span>
						</span>
					</div>
				);
			})}
		</div>
	);
};

export default SearchPage;
