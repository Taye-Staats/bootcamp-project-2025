import PortfolioPage from "@/components/portfolioPage";
import getPortfolioPageModel from "@/database/portfolioPageSchema"

export default async function portfolioPage() {
 
    const portfolioPages = await getPortfolioPage()
    if (!portfolioPages) {
        console.error("❌ Failed to load portfolio pages");
        return <p className="text-red-500">Portfolio data not available.</p>;
    }

    const page = portfolioPages.find((b) => b.title == "Android Tic Tac Toe");
    return page ? (
        <PortfolioPage
            key={page._id.toString()}
            title={page.title}
            date={new Date(page.date).toLocaleDateString()}
            description={page.description}
            image={page.image}
            image2={page.image2}
            image3={page.image3}
            alt={page.alt}
            alt2={page.alt2}
            alt3={page.alt3}
            demoLink={page.demoLink}
            githubLink={page.githubLink}
            linkInfo={page.linkInfo}
            linkInfo2={page.linkInfo2}
        />
    ) : (
         <p className="text-red-500">Portfolio page not found.</p>
    );
}

async function getPortfolioPage(){
    try {
    const Portfolio = await getPortfolioPageModel();
    console.log("✅ Model loaded:", Portfolio.modelName);
    const portfolios = await Portfolio.find().sort({ date: -1 });
    return portfolios;
  } catch (err) {
    console.error("Error fetching portfolios:", err);
    return null;
  }
}