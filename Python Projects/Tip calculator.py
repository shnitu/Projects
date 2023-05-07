print("Welcome to TIP calculator!")
bill = float(input("What was your bill? $"))
tip = int(input("How much tip you would like to give? 10, 12, or 15?"))
people = int(input("How many people to split the bill?"))
bill_with_tip = tip / 100 * bill + bill
tip_as_percent = tip / 100
total_tip_amount = bill * tip_as_percent
total_bill = bill + total_tip_amount
bill_per_person = total_bill / people
final_amount = round(bill_per_person, 2)
final_amount = "{:.2f}".format(bill_per_person)
print(f"Each person have to pay: ${final_amount}")