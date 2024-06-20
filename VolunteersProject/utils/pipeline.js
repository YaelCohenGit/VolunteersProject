
export default function buildPipeline() {
const pipeline = 
    [
      { $match: { status: false } },
      {
        $lookup: {
          from: 'addresses',
          localField: 'addressId',
          foreignField: '_id',
          as: 'Address'
        }
      }
    ]
  
    pipeline.splice(pipeline.length - 1, 0);

    return pipeline;
}