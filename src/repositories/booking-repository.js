const {booking}=require('../models');

class BookingRepository extends crudRepository
{
    constructor()
    {
        super(booking);
    }
}

module.exports={
    BookingRepository
}