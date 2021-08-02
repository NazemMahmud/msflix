import requests


class ApiService:
    base_url = "https://api.themoviedb.org/3/"
    api_key = "8973856b1f993665e9e2e6eb92dec45a"

    def get_api(self, type, mid=0):
        if type == "movie_release_date":
            url = self.base_url + "movie/" + str(mid) + "/release_dates?api_key=" + self.api_key
            response = requests.get(url)
            return response.json()
