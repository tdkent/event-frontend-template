import type { VenueList } from '~/models';

const venueLists: VenueList[] = [
	{
		label: 'Nearby Restaurants',
		items: [
			{
				name: 'Taqueria Guadalajara',
				websiteUrl: 'https://tgtacos.com/',
				address: '640 W Covell Blvd, Davis',
				mapUrl: 'https://maps.app.goo.gl/CkxEY3tG23P8XeFc6',
				phone: '(530) 297-4000',
			},
			{
				name: "Shah's Halal Food (Truck)",
				websiteUrl:
					'https://places.singleplatform.com/shahs-halal-food-5/menu?ref=google',
				address: '803 Russell Blvd, Davis',
				mapUrl: 'https://maps.app.goo.gl/ceHhQ8CvpBFfb22W8',
				phone: '(925) 660-5639',
			},
			{
				name: 'Crepeville',
				websiteUrl: 'https://www.crepeville.com/',
				address: '330 3rd St, Davis',
				mapUrl: 'https://maps.app.goo.gl/TmtZq3awBCUyFP2S8',
				phone: '(530) 750-2400',
			},
			{
				name: 'Guads Tacos & Beer',
				websiteUrl: 'https://guadsdavis.com/',
				address: '231 3rd St, Davis',
				mapUrl: 'https://maps.app.goo.gl/9i9dM8yD15yYFEJz6',
				phone: '(530) 564-4160',
			},
		],
	},
	{
		label: 'Nearby Hotels',
		items: [
			{
				name: 'Aggie Inn',
				websiteUrl:
					'https://www.guestreservations.com/aggie-inn-an-ascend-hotel-collection-member/booking?gclid=CjwKCAjwpuajBhBpEiwA_ZtfhaM3tpedRomzGO8x3VdhR7uGVgW-Gbs2vqGLbLC7uFhCzrgD0CSl3xoCMwIQAvD_BwE',
				address: '245 1st St, Davis',
				mapUrl: 'https://maps.app.goo.gl/GNCuxvnkVsWBaPdTA',
				phone: '(530) 756-0352',
			},
			{
				name: 'Best Western Palm Court',
				websiteUrl:
					'https://www.bestwestern.com/en_US/book/hotels-in-davis/best-western-plus-palm-court-hotel/propertyCode.05536.html',
				address: '234 D St, Davis',
				mapUrl: 'https://maps.app.goo.gl/MyVLfFifnAn7CDz28',
				phone: '(530) 753-7100',
			},
			{
				name: 'Hilton Garden Inn',
				websiteUrl:
					'https://www.hilton.com/en/hotels/smfdagi-hilton-garden-inn-davis-downtown/',
				address: '110 F St, Davis',
				mapUrl: 'https://maps.app.goo.gl/zyknN9pXCy9kndcs7',
				phone: '(530) 753-3600',
			},
			{
				name: 'Econo Lodge Woodland',
				websiteUrl:
					'https://www.choicehotels.com/california/woodland/econo-lodge-hotels/cab63?gclid=AA80OszlUajOIlEZBrMOyyC8m2y6mS_yAOY_53wquq31YSR-dcjNsB_uGoa7Jzp-iuJD9yr3_8zr0M3h3vOZbAMdyA8YaQyihaEBgQ&gclsrc=ha&gpa=GPADSAPR1&pmf=hpagoogle&product=localuniversal&source=PMFGPADELSAPR1_CAB63_localuniversal_US_1_desktop_2019-04-18_default_330523728_gha_camp_all_desktop_econolodge_standard_&ratePlanCode=SAPR1',
				address: '53 W Main St, Woodland',
				mapUrl: 'https://maps.app.goo.gl/ef1c6wbgUzAnfBrQ8',
				phone: '(530) 405-2267',
			},
			{
				name: 'Motel 6 Dixon',
				websiteUrl:
					'https://www.motel6.com/en/home/motels.ca.dixon.4831.html?pid=google&travelAgentNumber=TA001300&corporatePlusNumber=CPFMX2NJ&gclid=CjwKCAjwpuajBhBpEiwA_ZtfhTwNmznKTu3ajfLf7ILbQmYA6Osh_9g2z1udB5yNRrZkKcXZ5ZUpYxoC6pYQAvD_BwE&gclsrc=aw.ds',
				address: '1480 Ary Ln, Dixon',
				mapUrl: 'https://maps.app.goo.gl/tSSsdWSJ1d26uhc8A',
				phone: '(707) 693-0606',
			},
		],
	},
];

export default venueLists;
