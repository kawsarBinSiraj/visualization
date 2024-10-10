import { ModernFeatures } from "../../components/ModernFeatures";
import { PageBanner } from "../../components/PageBanner";

export default function Home() {
    return (
        <div className="home-page relative z-10">
            <PageBanner />
            <ModernFeatures />
        </div>
    );
}
