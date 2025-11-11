import PortfolioPreview from '@/components/portfolioPreview';
import {connectPortfolioPrevDB}from '@/database/dbPortfolio';
import Prev from '@/database/portfolioSchema'
export default async function portfolioPrevPage() {
 
    await connectPortfolioPrevDB()
    const portfiolos = await getPortfolios()
    console.log("✅ Connected to MongoDB2")
    console.log("Fetched portfolios:", portfiolos)
  return (
    <div className= "center" >
      <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
      <br/>   
       <div className="mt-8 space-y-6">
        {portfiolos ? (
          portfiolos.map((portfiolo) => (
            <PortfolioPreview
              
              key={portfiolo._id}
              slug={portfiolo.slug}
              title={portfiolo.title}
              description={portfiolo.description}
              image={portfiolo.image}
              imageAlt={portfiolo.imageAlt}
              date={new Date(portfiolo.date).toLocaleDateString()}
            />
          ))
        ) : (
          <p className="text-red-500">Failed to load blogs. Please try again later.</p>
        )}
      </div>
    </div>
  );
}
async function getPortfolios(){
    await connectPortfolioPrevDB() // function from db.ts before

    try {
            // query for all blogs and sort by date
        const portfolios = await Prev.find().sort({ date: -1 })
            // send a response as the blogs as the message
        return portfolios
    } catch (err) {
        return null
    }
}