import PortfolioPreview from '@/components/portfolioPreview';
import getPortfolioModel from '@/database/portfolioSchema';
import Prev from '@/database/portfolioSchema'
export default async function portfolioPrevPage() {
 
    await getPortfolios()
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
              
              key={portfiolo._id.toString()}
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
    try {
    const Portfolio = await getPortfolioModel();
    console.log("✅ Model loaded:", Portfolio.modelName);
    const portfolios = await Portfolio.find().sort({ date: -1 });
    return portfolios;
  } catch (err) {
    console.error("Error fetching portfolios:", err);
    return null;
  }
}