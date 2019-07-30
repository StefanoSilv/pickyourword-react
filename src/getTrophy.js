const getTrophy = (user_point) => {
	let points = user_point
	let trophy = {
		name: 'beginner',
		pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563681086/pickyourword/beginner_level_xscg9p.jpg',
		number: 0
	}

	if(points > 99 && points < 250){
		trophy = {
			name: 'inititate',
			pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563681686/pickyourword/initiate_cwt8qb.png',
			number: 1
		}
	}
	if(points > 249 && points < 400){
		trophy = {
			name: 'youngling',
			pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563681687/pickyourword/youngling_q6f2qm.jpg',
			number: 2
		}
	}
	if(points > 399 && points < 600 ){
		trophy = {
			name: 'padawan',
			pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563681687/pickyourword/padawan_ppncie.png',
			number: 3
		}
	}
	if(points > 599 && points < 800 ){
		trophy = {
			name: 'guardian',
			pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563682602/pickyourword/guardian_ds4wog.jpg',
			number: 4
		}
	}
	if(points > 799 && points < 1000 ){
		trophy = {
			name: 'warrior',
			pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563857893/pickyourword/warrior_wk5swq.png',
			number: 5
		}
	}
	if(points > 999 && points < 2000  ){
		trophy = {
			name: 'knight',
			pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563681687/pickyourword/warrior_rpfgur.jpg',
			number: 6
		}
	}
	if(points > 1999 && points < 3000 ){
		trophy = {
			name: 'commander',
			pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563682599/pickyourword/commander_cj3vc1.png',
			number: 7
		}
	}
	if(points > 2999 && points < 5000 ){
		trophy = {
			name: 'general',
			pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563682603/pickyourword/general_zmy6b2.jpg',
			number: 8
		}
	}
	if(points > 4999 && points < 7500 ){
		trophy = {
			name: 'senior general',
			pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563682526/pickyourword/senior_general_fsscmv.jpg',
			number: 9
		}
	}
	if(points > 7499 && points < 10000 ){
		trophy = {
			name: 'high general',
			pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563681686/pickyourword/high_general_tlw6i7.jpg',
			number: 10
		}
	}
	if(points > 9999 && points < 13000 ){
		trophy = {
			name: 'master',
			pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563681686/pickyourword/master_qewy2b.png',
			number: 11
		}
	}
	if(points > 12999 && points < 16000 ){
		trophy = {
			name: 'grand master',
			pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563681686/pickyourword/grand_master_taljda.png',
			number: 12
		}
	}
	if(points > 15999 && points < 20000 ){
		trophy = {
			name: 'supreme master',
			pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563682597/pickyourword/supreme_master_ibddul.png',
			number: 13
		}
	}
	if(points > 19999 && points < 30000 ){
		trophy = {
			name: 'galactic duke',
			pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563682530/pickyourword/galactic_duke_dlo0wu.png',
			number: 14
		}
	}
	if(points > 29999 && points < 50000 ){
		trophy = {
			name: 'galactic prince',
			pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563682601/pickyourword/galactic_prince_nqmmjl.png',
			number: 15
		}
	}
	if(points > 49999 && points < 100000 ){
		trophy = {
			name: 'galactic king',
			pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563682556/pickyourword/supreme_king_bxdnfk.png',
			number: 16
		}
	}
	if(points > 99999 ){
		trophy = {
			name: 'supreme emperator',
			pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563682601/pickyourword/supreme_emperator_houzvd.png',
			number: 17
		}
	}

	return trophy


}

module.exports = getTrophy
