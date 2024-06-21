import React, { useState, useEffect, lazy, Suspense } from "react";
import "./Project.css";
import Button from "../../components/button/Button";
import Loading from "../loading/Loading";
import { socialMediaLinks } from "../../portfolio";

// Include your JSON data directly in your file
const jsonData = {
  "data": {
        "user": {
            "name": "Isha Saikumar",
            "bio": "",
            "isHireable": true,
            "avatarUrl": "https://avatars.githubusercontent.com/u/57403205?u=e630e651444ace834d328cb7c6aa77acca6f8135&v=4",
            "location": null,
            "pinnedItems": {
                "totalCount": 6,
                "edges": [
                    {
                        "node": {
                            "name": "Distance-Calculator",
                            "description": null,
                            "forkCount": 0,
                            "stargazers": {
                                "totalCount": 0
                            },
                            "url": "https://github.com/ishabalu/Distance-Calculator",
                            "id": "MDEwOlJlcG9zaXRvcnkyNDA4OTUxNDc=",
                            "diskUsage": 8,
                            "primaryLanguage": {
                                "name": "Python",
                                "color": "#3572A5"
                            }
                        }
                    },
                    {
                        "node": {
                            "name": "Elgamal-Image-Stegno",
                            "description": null,
                            "forkCount": 2,
                            "stargazers": {
                                "totalCount": 0
                            },
                            "url": "https://github.com/ishabalu/Elgamal-Image-Stegno",
                            "id": "MDEwOlJlcG9zaXRvcnkzMDA1ODM5NTY=",
                            "diskUsage": 277,
                            "primaryLanguage": {
                                "name": "Jupyter Notebook",
                                "color": "#DA5B0B"
                            }
                        }
                    },
                    {
                        "node": {
                            "name": "Sell-That",
                            "description": null,
                            "forkCount": 2,
                            "stargazers": {
                                "totalCount": 0
                            },
                            "url": "https://github.com/nirmaljoji/Sell-That",
                            "id": "MDEwOlJlcG9zaXRvcnkyODQxMDMzODQ=",
                            "diskUsage": 20496,
                            "primaryLanguage": {
                                "name": "EJS",
                                "color": "#a91e50"
                            }
                        }
                    },
                    {
                        "node": {
                            "name": "Booking_Management_System_Backend",
                            "description": null,
                            "forkCount": 1,
                            "stargazers": {
                                "totalCount": 0
                            },
                            "url": "https://github.com/Dracon1023/Booking_Management_System_Backend",
                            "id": "R_kgDOLittnA",
                            "diskUsage": 102,
                            "primaryLanguage": {
                                "name": "JavaScript",
                                "color": "#f1e05a"
                            }
                        }
                    },
                    {
                        "node": {
                            "name": "Booking_Management_System_Frontend",
                            "description": null,
                            "forkCount": 1,
                            "stargazers": {
                                "totalCount": 0
                            },
                            "url": "https://github.com/Dracon1023/Booking_Management_System_Frontend",
                            "id": "R_kgDOLvCs3Q",
                            "diskUsage": 1223,
                            "primaryLanguage": {
                                "name": "JavaScript",
                                "color": "#f1e05a"
                            }
                        }
                    },
                    {
                        "node": {
                            "name": "NLP-project",
                            "description": "Sentiment analysis on reviews to determine whether given product name has required input feature.",
                            "forkCount": 0,
                            "stargazers": {
                                "totalCount": 0
                            },
                            "url": "https://github.com/ishabalu/NLP-project",
                            "id": "R_kgDOMMWwCg",
                            "diskUsage": 2449,
                            "primaryLanguage": {
                                "name": "Jupyter Notebook",
                                "color": "#DA5B0B"
                            }
                        }
                    }
                ]
            }
        }
    }
};

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => <div>Error loading projects.</div>;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    // Use the JSON data directly instead of fetching it
    setrepoFunction(jsonData.data.user.pinnedItems.edges);
  }, []);

  function setrepoFunction(array) {
    console.log('Setting repo state with:', array);
    setrepo(array);
  }

  if (!(typeof repo === "string" || repo instanceof String)) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              return <GithubRepoCard repo={v} key={v.node.id} />;
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
