# You are driving a vehicle that has capacity empty seats initially available for passengers.
# The vehicle only drives east (ie. it cannot turn around and drive west.)
#
# Given a list of trips, trip[i] = [num_passengers, start_location, end_location] contains information about the i-th trip:
#   the number of passengers that must be picked up, and the locations to pick them up and drop them off.
# The locations are given as the number of kilometers due east from your vehicle's initial location.
#
# Return true if and only if it is possible to pick up and drop off all passengers for all the given trips.
#


class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        passengers = {}
        for trip in trips:
            num_passengers, start_location, end_location = trip
            for i in range(start_location, end_location):
                if i in passengers.keys():
                    passengers[i] += num_passengers
                    if passengers[i] > capacity:
                        return False
                else:
                    passengers[i] = num_passengers
        return True
