module.exports = {


	/**
	* Rondom Integer Number Generator
	* @param [integer] maximum number
	* @param [integer] minimum number
	* @return [integer] Random number between the both of them or undifined in case of failure
	**/
	generateRandomNumber : function (max, min){

		if ( isNaN(max) || isNaN(min) || max < 0 || min < 0 )
			return ;
		return Math.floor(Math.random() * max ) + min ;

	},

	/**
	* Rondom Integer Number Generator
	* @param [integer] maximum number
	* @param [integer] minimum number
	* @param [integer] array length
	* @return [Object] of arrays foreach slot or undifined in case f failure 
	**/
	getSlotsArray : function (max, min, length){
		if ( isNaN(max) || isNaN(min) )
				return ;
		if( !length )
			length = 10;

		slot1 = [];
		slot2 = [];
		slot3 = [];

		for( var i = 0; i<=(length-1); i++){
			slot1.push( this.generateRandomNumber(max, min) );
			slot2.push( this.generateRandomNumber(max, min) );
			slot3.push( this.generateRandomNumber(max, min) );
		}

		return {
			slot1: slot1,
			slot2: slot2,
			slot3: slot3,
		};

	},

	/**
	* Rondom Integer Number Generator
	* @return [boolean] true or false or undifined in case of failure
	**/
	getRandomBonus : function(max, min){

		if ( isNaN(max) || isNaN(min) )
			return ;
		
		var bonus = this.generateRandomNumber(max, min);
		if( bonus % 3 == 0)
			bonus = true;
		else
			bonus = false;
		return bonus;
	}	

}