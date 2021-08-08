import requests


class ApiService:
    base_url = "https://api.themoviedb.org/3/"
    api_key = "8973856b1f993665e9e2e6eb92dec45a"

    def get_api(self, type, movie_id=0):
        if type == "movie_release_date":  # to get film ratings
            url = self.base_url + "movie/" + str(movie_id) + "/release_dates?api_key=" + self.api_key
            response = requests.get(url)
            return response.json()

        if type == "movie_credits":  # to get movie castings + other credits
            url = self.base_url + "movie/" + str(movie_id) + "/credits?api_key=" + self.api_key
            response = requests.get(url)
            return response.json()


